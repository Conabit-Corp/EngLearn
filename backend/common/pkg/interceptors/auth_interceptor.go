package interceptors

import (
	"context"
	"log"
	"time"

	"github.com/Conabit-Corp/EngLearn/backend/common/pkg/models"
	s "github.com/Conabit-Corp/EngLearn/backend/common/pkg/services"
	"github.com/go-redis/redis/v8"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

type AuthInterceptor struct {
	jwtService            *s.JwtService
	redis                 *redis.Client
	proceduresWithoutAuth map[string]bool
}

func NewAuthInterceptor(
	jwtService *s.JwtService,
	redis *redis.Client,
	proceduresWithoutAuth map[string]bool) *AuthInterceptor {
	return &AuthInterceptor{
		jwtService:            jwtService,
		redis:                 redis,
		proceduresWithoutAuth: proceduresWithoutAuth,
	}
}

func (interceptor *AuthInterceptor) Unary() grpc.UnaryServerInterceptor {
	return func(
		ctx context.Context,
		req interface{},
		info *grpc.UnaryServerInfo,
		handler grpc.UnaryHandler) (interface{}, error) {
		var err error
		authNeeded := interceptor.authNeeded(info.FullMethod)
		if !authNeeded {
			return handler(ctx, req)
		}
		jwt := req.(models.HasSession).GetSession().Jwt
		usrId, err := interceptor.check(jwt)
		if err != nil {
			return nil, err
		}
		return handler(context.WithValue(ctx, "user_id", usrId), req)
	}
}

func (interceptor *AuthInterceptor) Stream() grpc.StreamServerInterceptor {
	return func(
		srv interface{},
		ss grpc.ServerStream,
		info *grpc.StreamServerInfo,
		handler grpc.StreamHandler) error {
		var err error
		authNeeded := interceptor.authNeeded(info.FullMethod)
		if !authNeeded {
			return handler(srv, ss)
		}
		//todo debug
		jwt := srv.(models.HasSession).GetSession().Jwt
		usrId, err := interceptor.check(jwt)
		if err != nil {
			return err
		}
		//todo debug
		trailer := metadata.Pairs("user_id", usrId)
		ss.SetTrailer(trailer)
		ss.Context()
		return handler(srv, ss)
	}
}

func (interceptor *AuthInterceptor) authNeeded(method string) bool {
	_, ok := interceptor.proceduresWithoutAuth[method]
	return !ok
}

func (interceptor *AuthInterceptor) check(token string) (string, error) {
	claims, err := interceptor.jwtService.Verify(token)
	if err != nil {
		log.Printf("failed jwt verifying = %s", err.Error())
		return "", status.Errorf(codes.PermissionDenied, "Jwt token invalid")
	}
	if !interceptor.containsInRedis(token) {
		return "", status.Errorf(codes.PermissionDenied, "Unknown jwt token")
	}
	return claims.Id, nil
}

func (interceptor *AuthInterceptor) containsInRedis(token string) bool {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()
	res, err := interceptor.redis.Get(ctx, token).Result()
	if err != nil || err == redis.Nil {
		log.Printf("error while receiving redis key by value = %s", err.Error())
		return false
	}
	if res == "" {
		log.Printf("empty user id in redis with jwt = %s", token)
		return false
	}
	return true
}
