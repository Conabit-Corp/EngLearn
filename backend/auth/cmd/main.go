package main

import (
	"log"
	"net/http"

	authRepos "github.com/Conabit-Corp/EngLearn/backend/auth/internal/repos"
	authServices "github.com/Conabit-Corp/EngLearn/backend/auth/internal/services"
	cnf "github.com/Conabit-Corp/EngLearn/backend/common/pkg/config"
	"github.com/Conabit-Corp/EngLearn/backend/common/pkg/inits"
	"github.com/Conabit-Corp/EngLearn/backend/common/pkg/interceptors"
	commonServices "github.com/Conabit-Corp/EngLearn/backend/common/pkg/services"
	authProto "github.com/Conabit-Corp/EngLearn/proto/conabit/englearn/auth"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"google.golang.org/grpc"
)

//todo optimize
var proceduresWithoutAuth = map[string]bool{
	"/conabit.englearn.auth.AuthService/SignIn": true,
	"/conabit.englearn.auth.AuthService/SignUp": true,
}

func main() {
	log.Println("starting auth service")
	envCnf := cnf.LoadConfigFromEnv()

	mongo := inits.NewMongoConnection(envCnf)
	redis := inits.NewRedisConnection(envCnf)

	jwtService := commonServices.NewJwtService(envCnf)
	authRepo := authRepos.NewMongoUserRepo(mongo)
	authService := authServices.NewAuthService(jwtService, authRepo, redis, envCnf.Salt)
	authInterceptor := interceptors.NewAuthInterceptor(jwtService, redis, proceduresWithoutAuth)

	grpcServer := grpc.NewServer(
		grpc.ChainStreamInterceptor(authInterceptor.Stream()),
		grpc.ChainUnaryInterceptor(authInterceptor.Unary()),
	)

	authProto.RegisterAuthServiceServer(grpcServer, authService)

	grpcWrapped := grpcweb.WrapServer(grpcServer,
		grpcweb.WithOriginFunc(func(origin string) bool {
			return true
		}),
	)

	handler := func(resp http.ResponseWriter, req *http.Request) {
		grpcWrapped.ServeHTTP(resp, req)
	}

	httpServer := http.Server{
		Addr:    ":4000",
		Handler: http.HandlerFunc(handler),
	}

	log.Println("auth service started")
	log.Fatal(httpServer.ListenAndServe())
}
