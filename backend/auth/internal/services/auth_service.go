package services

import (
	"context"

	"github.com/Conabit-Corp/EngLearn/proto/conabit/englearn/auth"
	"google.golang.org/protobuf/types/known/emptypb"
)

type AuthService struct{
	//todo
}

func NewAuthService() *AuthService{
	return &AuthService{}
}

func (service *AuthService) SignIn(context.Context, *auth.SignInRequest) (*auth.AuthResponse, error){
	return nil,nil
}

func (service *AuthService) SignUp(context.Context, *auth.SignUpRequest) (*auth.AuthResponse, error){
	return nil,nil
}

func (service *AuthService) Logout(context.Context, *auth.LogoutRequest) (*emptypb.Empty, error){
	return &emptypb.Empty{},nil
}
