package main

import (
	"context"
	"log"
	"net/http"

	cnf "github.com/Conabit-Corp/EngLearn/backend/common/pkg/config"
	"github.com/Conabit-Corp/EngLearn/backend/common/pkg/inits"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"go.mongodb.org/mongo-driver/mongo/readpref"
	"google.golang.org/grpc"
)

var ctx = context.Background()

func main() {
	envCnf := cnf.LoadConfigFromEnv()
	log.Println(envCnf)
	
	mongo := inits.NewMongoConnection(envCnf)
	mpErr := mongo.Ping(ctx, readpref.Primary())

	redis := inits.NewRedisConnection(envCnf)
	_, rpErr := redis.Ping(ctx).Result()

	if mpErr != nil {
		panic(mpErr.Error()+envCnf.ToString())
	}
	if rpErr != nil {
		panic(rpErr.Error()+envCnf.ToString())
	}

	grpcServer := grpc.NewServer()

	grpcWrapped := grpcweb.WrapServer(grpcServer,
		grpcweb.WithOriginFunc(func(origin string) bool {
			return true
		}),
	)

	handler := func(resp http.ResponseWriter, req *http.Request) {
		grpcWrapped.ServeHTTP(resp, req)
	}

	httpServer := http.Server{
		Addr:    ":4002",
		Handler: http.HandlerFunc(handler),
	}

	log.Println("Try start exercise service")
	log.Fatal(httpServer.ListenAndServe())	
}
