package services

import (
	"context"
	"crypto/sha1"
	"log"
	"time"

	"github.com/Conabit-Corp/EngLearn/backend/auth/internal/repos"
	commonServices "github.com/Conabit-Corp/EngLearn/backend/common/pkg/services"
	authGen "github.com/Conabit-Corp/EngLearn/proto/conabit/englearn/auth"
	commonGen "github.com/Conabit-Corp/EngLearn/proto/conabit/englearn/common"
	"github.com/go-redis/redis/v8"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/emptypb"
)

type AuthService struct {
	jwtService *commonServices.JwtService
	userRepo   *repos.MongoUserRepo
	redis      *redis.Client
	salt       string
}

func NewAuthService(jwtService *commonServices.JwtService, userRepo *repos.MongoUserRepo,
	redis *redis.Client, salt string) *AuthService {
	return &AuthService{
		jwtService: jwtService,
		userRepo:   userRepo,
		redis:      redis,
		salt:       salt,
	}
}

func (service *AuthService) SignIn(
	ctx context.Context,
	req *authGen.SignInRequest) (*authGen.AuthResponse, error) {
	var err error
	sha := sha1.New()
	sha.Write([]byte(req.Password))
	sha.Write([]byte(service.salt))
	log.Printf("new signIn request: login = %s", req.Login)
	usr, err := service.userRepo.FindUserByNicknameAndPasswordHash(ctx, req.Login, string(sha.Sum(nil)))
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "signIn failed = %s", err.Error())
	}
	jwt, err := service.jwtService.Generate(usr)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "failed generate jwt = %s", err.Error())
	}
	//TODO if not ok
	err = service.redis.Set(ctx, jwt, usr.ID.Hex(), 30*24*time.Hour).Err() //todo to props
	if err != nil {
		log.Printf("error while saving redis session = %s", err.Error())
		return nil, status.Errorf(codes.Internal, "failed create session")
	}
	return &authGen.AuthResponse{
		Session: &commonGen.Session{
			Jwt: jwt,
		},
	}, nil
}

func (service *AuthService) SignUp(
	ctx context.Context,
	req *authGen.SignUpRequest) (*authGen.AuthResponse, error) {
	var err error
	if req.Password != req.RePassword {
		return nil, status.Errorf(codes.InvalidArgument, "passwords not equal")
	}
	if service.userRepo.UserExitstsByNickname(ctx, req.Login) {
		return nil, status.Errorf(codes.InvalidArgument, "login already taken")
	}
	sha := sha1.New()
	sha.Write([]byte(req.Password))
	sha.Write([]byte(service.salt))
	usr, err := service.userRepo.CreateUser(ctx, req.Login, string(sha.Sum(nil)))
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "failed user creation = %s", err.Error())
	}
	jwt, err := service.jwtService.Generate(usr)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "failed generate jwt = %s", err.Error())
	}
	//TODO if not ok
	err = service.redis.Set(ctx, jwt, usr.ID.Hex(), 30*24*time.Hour).Err() //todo to props
	if err != nil {
		log.Printf("error while saving redis session = %s", err.Error())
		return nil, status.Errorf(codes.Internal, "failed create session")
	}
	return &authGen.AuthResponse{
		Session: &commonGen.Session{
			Jwt: jwt,
		},
	}, nil
}

func (service *AuthService) Logout(ctx context.Context, req *authGen.LogoutRequest) (*emptypb.Empty, error) {
	var err error
	claims, err := service.jwtService.Verify(req.Session.Jwt)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "invalid jwt = %s", err.Error())
	}
	exists := service.userRepo.UserExitstsByNickname(ctx, claims.Nickname)
	if !exists {
		return nil, status.Errorf(codes.InvalidArgument, "unknown user")
	}
	service.redis.Del(ctx, req.Session.Jwt)
	return &emptypb.Empty{}, nil
}
