package mongo

import (
	"context"
	"fmt"

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
	client, err := mongo.Connect(context.TODO(),options)
	if err!=nil {
		panic("cannot open mongo connection")
	}
	return client
}
