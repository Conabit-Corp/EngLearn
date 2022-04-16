package main

import (
	"context"
	"log"
	"net/http"

	authServices "github.com/Conabit-Corp/EngLearn/backend/auth/internal/services"
	cnf "github.com/Conabit-Corp/EngLearn/backend/common/pkg/config"
	"github.com/Conabit-Corp/EngLearn/backend/common/pkg/interceptors"
	commonServices "github.com/Conabit-Corp/EngLearn/backend/common/pkg/services"
	authProto "github.com/Conabit-Corp/EngLearn/proto/conabit/englearn/auth"

	// "github.com/Conabit-Corp/EngLearn/backend/common/pkg/mongo"
	// "github.com/Conabit-Corp/EngLearn/backend/common/pkg/redis"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	// "go.mongodb.org/mongo-driver/mongo/readpref"
	"google.golang.org/grpc"
)

var ctx = context.Background()

//todo optimize
var accessProcedures = map[string]bool{
	"/conabit.englearn.auth.AuthService/SignIn": false,
	"/conabit.englearn.auth.AuthService/SignUp": false,
	"/conabit.englearn.auth.AuthService/Logout": true,
}

func main() {
	envCnf := cnf.LoadConfigFromEnv()
	log.Println(envCnf)

	// mongo := mongo.NewMongoConnection(envCnf)
	// redis := redis.NewRedisConnection(envCnf)

	jwtService := commonServices.NewJwtService(envCnf.SecretKey)
	authInterceptor := interceptors.NewAuthInterceptor(jwtService, accessProcedures)

	grpcServer := grpc.NewServer(
		grpc.ChainStreamInterceptor(authInterceptor.Stream()),
		grpc.ChainUnaryInterceptor(authInterceptor.Unary()),
	)

	authProto.RegisterAuthServiceServer(grpcServer, authServices.NewAuthService())

	grpcWrapped := grpcweb.WrapServer(grpcServer,
		grpcweb.WithOriginFunc(func(origin string) bool {
			return true
		}),
	)	
	log.Println(*grpcWrapped)
	handler := func(resp http.ResponseWriter, req *http.Request) {
		grpcWrapped.ServeHTTP(resp, req)
	}

	httpServer := http.Server{
		Addr:    ":4000",
		Handler: http.HandlerFunc(handler),
	}

	log.Println("Try start auth service")
	log.Fatal(httpServer.ListenAndServe())
}
