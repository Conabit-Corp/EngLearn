package inits

import (
	"github.com/Conabit-Corp/EngLearn/backend/common/pkg/config"
	"github.com/go-redis/redis/v8"
)

func NewRedisConnection(cnf *config.AppConfig) *redis.Client {
	return redis.NewClient(&redis.Options{
		Addr:     cnf.RedisUrl,
		Password: cnf.RedisPassword,
		DB:       0,
	})
}
