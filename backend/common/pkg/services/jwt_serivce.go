package services

import (
	"fmt"

	"github.com/Conabit-Corp/EngLearn/backend/common/pkg/models"
	"github.com/golang-jwt/jwt"
)

type JwtService struct {
	Secret string
}

func NewJwtService(sercet string) *JwtService {
	return &JwtService{Secret: sercet}
}

type UserClaims struct {
	jwt.StandardClaims
	ExternalId string `json:"external_id"`
	Nickname   string `json:"nickname"`
}

func (service *JwtService) Generate(user *models.User) (string, error) {
	return "egor", nil
}

func (service *JwtService) Verify(token string) (*UserClaims, error) {
	if token != "egor" {
		return nil, fmt.Errorf("unknown token")
	}

	return nil, nil
}
