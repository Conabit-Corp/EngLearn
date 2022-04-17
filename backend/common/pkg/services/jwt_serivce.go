package services

import (
	"fmt"
	"time"

	"github.com/Conabit-Corp/EngLearn/backend/common/pkg/config"
	"github.com/Conabit-Corp/EngLearn/backend/common/pkg/models"
	"github.com/golang-jwt/jwt"
)

type JwtService struct {
	Secret      string
	JwtLifetime time.Duration
}

func NewJwtService(cnf *config.AppConfig) *JwtService {
	return &JwtService{
		Secret:      cnf.SecretKey,
		JwtLifetime: time.Duration(24*cnf.JwtLifetimeDays) * time.Hour,
	}
}

type UserClaims struct {
	jwt.StandardClaims
	ExternalId string `json:"external_id"`
	Nickname   string `json:"nickname"`
}

func (service *JwtService) Generate(user *models.User) (string, error) {
	claims := UserClaims{
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(service.JwtLifetime).Unix(),
		},
		ExternalId: user.ExtrenalId,
		Nickname:   user.Nickname,
	}

	//todo check hmac
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString([]byte(service.Secret))
}

func (service *JwtService) Verify(jwtToken string) (*UserClaims, error) {
	token, err := jwt.ParseWithClaims(
		jwtToken,
		&UserClaims{},
		func(token *jwt.Token) (interface{}, error) {
			_, ok := token.Method.(*jwt.SigningMethodHMAC)
			if !ok {
				return nil, fmt.Errorf("unexpected token signing method")
			}
			return []byte(service.Secret), nil
		},
	)

	if err != nil {
		return nil, fmt.Errorf("invalid token: %w", err)
	}

	claims, ok := token.Claims.(*UserClaims)
	if !ok {
		return nil, fmt.Errorf("invalid token claims")
	}

	return claims, nil
}
