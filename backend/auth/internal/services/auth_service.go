package services

import (
	"context"
	"crypto/sha1"
	"time"

	authRepos "github.com/Conabit-Corp/EngLearn/backend/auth/internal/repos"
	commonServices "github.com/Conabit-Corp/EngLearn/backend/common/pkg/services"
	"github.com/Conabit-Corp/EngLearn/proto/conabit/englearn/auth"
	"github.com/Conabit-Corp/EngLearn/proto/conabit/englearn/common"
	"github.com/go-redis/redis/v8"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/emptypb"
)

type AuthService struct {
	JwtService *commonServices.JwtService
	AuthRepo   authRepos.UserRepo
	Redis      *redis.Client
	Salt       string
}

func NewAuthService(jwtService *commonServices.JwtService, auhtRepo authRepos.UserRepo, redis *redis.Client, salt string) *AuthService {
	return &AuthService{
		JwtService: jwtService,
		AuthRepo:   auhtRepo,
		Redis:      redis,
		Salt:       salt,
	}
}

func (service *AuthService) SignIn(ctx context.Context, req *auth.SignInRequest) (*auth.AuthResponse, error) {
	var err error
	sha := sha1.New()
	sha.Write([]byte(req.Password))
	sha.Write([]byte(service.Salt))

	usr, err := service.AuthRepo.FindUserByExternalIdAndPasswordHash(ctx, req.Login, string(sha.Sum(nil)))
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "signIn failed = %s", err.Error())
	}

	jwt, err := service.JwtService.Generate(usr)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "failed generate jwt = %s", err.Error())
	}

	//TODO if not ok
	service.Redis.Set(ctx, jwt, usr.ExtrenalId, 10*time.Minute)

	return &auth.AuthResponse{
		Session: &common.Session{
			Jwt: jwt,
		},
	}, nil
}

func (service *AuthService) SignUp(ctx context.Context, req *auth.SignUpRequest) (*auth.AuthResponse, error) {
	var err error
	if req.Password != req.RePassword {
		return nil, status.Errorf(codes.InvalidArgument, "passwords not equal")
	}
	sha := sha1.New()
	sha.Write([]byte(req.Password))
	sha.Write([]byte(service.Salt))

	usr, err := service.AuthRepo.CreateUser(ctx, req.Login, string(sha.Sum(nil)))

	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "failed user creation = %s", err.Error())
	}
	jwt, err := service.JwtService.Generate(usr)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "failed generate jwt = %s", err.Error())
	}

	//TODO if not ok
	service.Redis.Set(ctx, jwt, usr.ExtrenalId, 30*24*time.Hour)

	return &auth.AuthResponse{
		Session: &common.Session{
			Jwt: jwt,
		},
	}, nil
}

func (service *AuthService) Logout(ctx context.Context, req *auth.LogoutRequest) (*emptypb.Empty, error) {
	var err error

	claims, err := service.JwtService.Verify(req.Session.Jwt)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "invalid jwt = %s", err.Error())
	}

	exists := service.AuthRepo.ExitstsByExternalId(ctx, claims.ExternalId)

	if !exists {
		return nil, status.Errorf(codes.InvalidArgument, "unknown user by id =%s", claims.ExternalId)
	}

	service.Redis.Del(ctx, req.Session.Jwt)

	return &emptypb.Empty{}, nil
}
