package config

import (
	"fmt"
	"os"
	"strconv"
)

type AppConfig struct {
	MongoUrl        string
	MongoUser       string
	MongoPassword   string
	RedisUrl        string
	RedisPassword   string
	SecretKey       string
	JwtLifetimeDays int
	Salt            string
}

func (cnf *AppConfig) ToString() string {
	return fmt.Sprintf(`
		MongoUrl:%s,
		MongoUser:%s,
		MongoPassword:%s,
		RedisUrl:%s,
		RedisPasword:%s
		SecretKey:%s
		Salt:%s
		JwtLifetimeDays:%d
	`, cnf.MongoUrl, cnf.MongoUser, cnf.MongoPassword,
		cnf.RedisUrl, cnf.MongoPassword, cnf.SecretKey,
		cnf.Salt, cnf.JwtLifetimeDays)
}

func LoadConfigFromEnv() *AppConfig {
	return &AppConfig{
		MongoUrl:        loadEnvByKey("MONGO_URL"),
		MongoUser:       loadEnvByKey("MONGO_USER"),
		MongoPassword:   loadEnvByKey("MONGO_PASS"),
		RedisUrl:        loadEnvByKey("REDIS_URL"),
		RedisPassword:   loadEnvByKey("REDIS_PASS"),
		SecretKey:       loadEnvByKey("SECRET_KEY"),
		Salt:            loadEnvByKey("SALT"),
		JwtLifetimeDays: parseUint(loadEnvByKey("JWT_LIFETIME_DAYS")),
	}
}

func loadEnvByKey(key string) (value string) {
	val, ok := os.LookupEnv(key)
	if !ok {
		panic(fmt.Sprintf("cannot load env value by key = %s", key))
	}
	return val
}

func parseUint(str string) int {
	val, err := strconv.Atoi(str)
	if err != nil {
		panic(err.Error())
	}
	return val
}
