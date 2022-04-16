package interceptors

import (
	"context"

	"github.com/Conabit-Corp/EngLearn/backend/common/pkg/models"
	s "github.com/Conabit-Corp/EngLearn/backend/common/pkg/services"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type AuthInterceptor struct {
	JwtService       *s.JwtService
	accessProcedures map[string]bool
}

func NewAuthInterceptor(jwtService *s.JwtService, accessProcedures map[string]bool) *AuthInterceptor {
	return &AuthInterceptor{JwtService: jwtService, accessProcedures: accessProcedures}
}

func (interceptor *AuthInterceptor) Unary() grpc.UnaryServerInterceptor {
	return func(
		ctx context.Context,
		req interface{},
		info *grpc.UnaryServerInfo,
		handler grpc.UnaryHandler) (interface{}, error) {
		var err error
		authNeeded, err := interceptor.authNeeded(info.FullMethod)
		if err != nil {
			return nil, err
		}
		if !authNeeded {
			return handler(ctx, req)
		}
		jwt := req.(models.HasSession).GetSession().Jwt
		err = interceptor.check(jwt)
		if err != nil {
			return nil, err
		}
		return handler(ctx, req)
	}
}

func (interceptor *AuthInterceptor) Stream() grpc.StreamServerInterceptor {
	return func(
		srv interface{},
		ss grpc.ServerStream,
		info *grpc.StreamServerInfo,
		handler grpc.StreamHandler) error {
		var err error
		authNeeded, err := interceptor.authNeeded(info.FullMethod)
		if err != nil {
			return err
		}
		if !authNeeded {
			return handler(srv, ss)
		}
		//todo debug
		jwt := srv.(models.HasSession).GetSession().Jwt
		err = interceptor.check(jwt)
		if err != nil {
			return err
		}
		return handler(srv, ss)
	}
}

func (interceptor *AuthInterceptor) authNeeded(method string) (bool, error) {
	auth, ok := interceptor.accessProcedures[method]
	if !ok {
		return true, status.Errorf(codes.PermissionDenied, "Unknown procedure call")
	}
	return auth, nil
}

func (interceptor *AuthInterceptor) check(token string) error {
	_, err := interceptor.JwtService.Verify(token)
	if err != nil {
		return status.Errorf(codes.PermissionDenied, "Jwt token invalid")
	}
	return nil
}
