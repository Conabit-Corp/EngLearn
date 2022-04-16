package config

import (
	"fmt"
	"os"
)

type AppConfig struct {
	MongoUrl      string
	MongoUser     string
	MongoPassword string

	RedisUrl      string
	RedisPassword string

	SecretKey string
}

func (cnf *AppConfig) ToString() string {
	return fmt.Sprintf(`
		MongoUrl:%s,
		MongoUser:%s,
		MongoPassword:%s,
		RedisUrl:%s,
		RedisPasword:%s
		SecretKey:%s
	`, cnf.MongoUrl, cnf.MongoUser, cnf.MongoPassword,
		cnf.RedisUrl, cnf.MongoPassword, cnf.SecretKey)
}

func LoadConfigFromEnv() *AppConfig {
	return &AppConfig{
		MongoUrl:      loadEnvByKey("MONGO_URL"),
		MongoUser:     loadEnvByKey("MONGO_USER"),
		MongoPassword: loadEnvByKey("MONGO_PASS"),
		RedisUrl:      loadEnvByKey("REDIS_URL"),
		RedisPassword: loadEnvByKey("REDIS_PASS"),
		SecretKey:     loadEnvByKey("SECRET_KEY"),
	}
}

func loadEnvByKey(key string) (value string) {
	val, ok := os.LookupEnv(key)
	if !ok {
		panic(fmt.Sprintf("cannot load env value by key = %s", key))
	}
	return val
}
