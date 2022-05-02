package repos

import (
	"context"
	"fmt"
	"log"

	"github.com/Conabit-Corp/EngLearn/backend/common/pkg/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type MongoUserRepo struct {
	mongo           *mongo.Client
	usersCollection *mongo.Collection
}

func NewMongoUserRepo(mongo *mongo.Client) *MongoUserRepo {
	return &MongoUserRepo{
		mongo: mongo,
		usersCollection: mongo.
			Database("auth").
			Collection("users"),
	}
}

func (repo *MongoUserRepo) CreateUser(ctx context.Context, nickname string, passwordHash string) (user *models.User, err error) {
	log.Printf("try create user with login = %s", nickname)
	var err0 error
	usr := &models.User{
		Nickname:     nickname,
		PasswordHash: passwordHash,
	}
	result, err0 := repo.usersCollection.
		InsertOne(ctx, usr)
	if err0 != nil {
		log.Printf("cant`t create user, err = %s", err0.Error())
		return nil, fmt.Errorf("failed save user")
	}
	var saved models.User
	err0 = repo.usersCollection.
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

func (repo *MongoUserRepo) FindUserById(ctx context.Context, id string) (*models.User, error) {
	log.Printf("try find user by id = %s", id)
	var user0 models.User
	err0 := repo.usersCollection.
		FindOne(ctx, bson.M{"_id": id}).
		Decode(&user0)
	if err0 != nil {
		log.Printf("user by id=%s not found, err = %s ", id, err0.Error())
		return nil, fmt.Errorf("user by id %s not found", id)
	}
	return &user0, nil
}

func (repo *MongoUserRepo) FindUserByNickname(ctx context.Context, nickname string) (*models.User, error) {
	log.Printf("try find user by nickname = %s", nickname)
	var user0 models.User
	err0 := repo.usersCollection.
		FindOne(ctx, bson.M{"nickname": nickname}).
		Decode(&user0)
	if err0 != nil {
		log.Printf("user by nickname=%s not found, err = %s ", nickname, err0.Error())
		return nil, fmt.Errorf("user by nickname %s not found", nickname)
	}
	return &user0, nil
}

func (repo *MongoUserRepo) UserExitstsByNickname(ctx context.Context, nickname string) bool {
	log.Printf("check user existing by nickname = %s", nickname)
	exists := true
	count, err := repo.usersCollection.CountDocuments(ctx, bson.M{"nickname": nickname})
	if err != nil || count == 0 {
		exists = false
	}
	log.Printf("user by nickname %s exists = %t", nickname, exists)
	return exists
}

func (repo *MongoUserRepo) FindUserByNicknameAndPasswordHash(
	ctx context.Context,
	nickname string,
	passwordHash string) (user *models.User, err error) {
	log.Printf("try find user by nickname %s", nickname)
	var user0 models.User
	err0 := repo.usersCollection.
		FindOne(ctx, bson.M{"nickname": nickname, "password": passwordHash}).
		Decode(&user0)
	if err0 != nil {
		log.Printf("user by nickname %s not found", nickname)
		return nil, fmt.Errorf("user by nickname %s not found", nickname)
	}
	return &user0, nil
}
