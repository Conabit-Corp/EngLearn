package inits

import (
	"context"
	"fmt"
	"time"

	"github.com/Conabit-Corp/EngLearn/backend/common/pkg/config"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func NewMongoConnection(cnf *config.AppConfig) *mongo.Client {
	options := options.Client().
		ApplyURI(fmt.Sprintf("mongodb://%s/", cnf.MongoUrl)).
		SetAuth(options.Credential{
			Username: cnf.MongoUser,
			Password: cnf.MongoPassword,
		})
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	client, err := mongo.Connect(ctx, options)
	if err != nil {
		panic("cannot open mongo connection")
	}
	return client
}
