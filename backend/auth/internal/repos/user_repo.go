package repos

import (
	"context"
	"fmt"
	"log"

	"github.com/Conabit-Corp/EngLearn/backend/common/pkg/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type UserRepo interface {
	CreateUser(ctx context.Context, login string, passwordHash string) (user *models.User, err error)

	FindUserByExternalId(ctx context.Context, extrenalId string) (user *models.User, err error)

	ExitstsByExternalId(ctx context.Context, extrenalId string) bool

	FindUserByExternalIdAndPasswordHash(ctx context.Context, login string, passwordHash string) (user *models.User, err error)
}

type MongoUserRepo struct {
	Mongo           *mongo.Client
	UsersCollection *mongo.Collection
}

func NewMongoUserRepo(mongo *mongo.Client) UserRepo {
	return &MongoUserRepo{
		Mongo: mongo,
		UsersCollection: mongo.
			Database("auth").
			Collection("users"),
	}
}

func (repo *MongoUserRepo) CreateUser(ctx context.Context, login string, passwordHash string) (user *models.User, err error) {
	log.Printf("try create user with login = %s", login)
	var err0 error
	usr := &models.User{
		ExtrenalId:   login,
		Nickname:     "User",
		PasswordHash: passwordHash,
	}
	result, err0 := repo.UsersCollection.
		InsertOne(ctx, usr)
	if err0 != nil {
		log.Printf("cant`t create user, err = %s", err0.Error())
		return nil, fmt.Errorf("failed save user")
	}
	var saved models.User
	err0 = repo.UsersCollection.
		FindOne(ctx, bson.M{"_id": result.InsertedID}).
		Decode(&saved)
	if err0 != nil {
		log.Printf("can`t find user by _id = %s, err = %s",
			result.InsertedID, err0.Error())
		return nil, fmt.Errorf("failed find user after saving")
	}
	log.Printf("user %s created successfully", saved.ID)
	return &saved, nil
}

func (repo *MongoUserRepo) FindUserByExternalId(ctx context.Context, login string) (user *models.User, err error) {
	log.Printf("try find user by externalId = %s", login)
	var user0 models.User
	err0 := repo.UsersCollection.
		FindOne(ctx, bson.M{"ex_id": login}).
		Decode(&user0)
	if err0 != nil {
		log.Printf("user by external id=%s not found, err = %s ", login, err0.Error())
		return nil, fmt.Errorf("user by external id %s not found", login)
	}
	return &user0, nil
}

func (repo *MongoUserRepo) ExitstsByExternalId(ctx context.Context, extrenalId string) bool {
	log.Printf("check user existing by externalId = %s", extrenalId)
	exists := true
	count, err := repo.UsersCollection.CountDocuments(ctx, bson.M{"ex_id": extrenalId})
	if err != nil || count == 0 {
		exists = false
	}
	log.Printf("user by externalId %s exists = %t", extrenalId, exists)
	return exists
}

func (repo *MongoUserRepo) FindUserByExternalIdAndPasswordHash(ctx context.Context, login string, passwordHash string) (user *models.User, err error) {
	log.Printf("try find user by externalId %s and passwordHash %s", login, passwordHash)
	var user0 models.User
	err0 := repo.UsersCollection.
		FindOne(ctx, bson.M{"ex_id": login, "password": passwordHash}).
		Decode(&user0)
	if err0 != nil {
		log.Printf("user by externalId %s and passwordHash %s not found", login, passwordHash)
		return nil, fmt.Errorf("user by external id %s and password hash not found", login)
	}
	return &user0, nil
}
