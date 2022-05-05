package main

import (
	"log"
	"net/http"

	"github.com/Conabit-Corp/EngLearn/backend/collection/internal/repos"
	"github.com/Conabit-Corp/EngLearn/backend/collection/internal/serivces"
	cnf "github.com/Conabit-Corp/EngLearn/backend/common/pkg/config"
	"github.com/Conabit-Corp/EngLearn/backend/common/pkg/inits"
	"github.com/Conabit-Corp/EngLearn/backend/common/pkg/interceptors"
	"github.com/Conabit-Corp/EngLearn/backend/common/pkg/services"
	collectionProto "github.com/Conabit-Corp/EngLearn/proto/conabit/englearn/collection"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"google.golang.org/grpc"
)

var proceduresWithoutAuth = map[string]bool{}

func main() {
	log.Println("starting collection service")
	envCnf := cnf.LoadConfigFromEnv()

	mongo := inits.NewMongoConnection(envCnf)
	redis := inits.NewRedisConnection(envCnf)

	jwtSerivce := services.NewJwtService(envCnf)
	authInterceptor := interceptors.NewAuthInterceptor(jwtSerivce, redis, proceduresWithoutAuth)
	collectionRepo := repos.NewMongoWordCollectionRepo(mongo)
	collectionService := serivces.NewWordCollectionService(collectionRepo)

	grpcServer := grpc.NewServer(
		grpc.ChainUnaryInterceptor(authInterceptor.Unary()),
		grpc.ChainStreamInterceptor(authInterceptor.Stream()),
	)

	collectionProto.RegisterWordCollectionServiceServer(grpcServer, collectionService)

	grpcWrapped := grpcweb.WrapServer(grpcServer,
		grpcweb.WithOriginFunc(func(origin string) bool {
			return true
		}),
	)

	handler := func(resp http.ResponseWriter, req *http.Request) {
		grpcWrapped.ServeHTTP(resp, req)
	}

	httpServer := http.Server{
		Addr:    ":4003",
		Handler: http.HandlerFunc(handler),
	}

	log.Println("colletion serivce started")
	log.Fatal(httpServer.ListenAndServe())
}
