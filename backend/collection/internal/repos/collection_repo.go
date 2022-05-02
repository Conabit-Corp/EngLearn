package repos

import (
	"context"
	"fmt"
	"log"

	"github.com/Conabit-Corp/EngLearn/backend/collection/pkg/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type MongoWordCollectionRepo struct {
	mongo           *mongo.Client
	words           *mongo.Collection
	wordPairs       *mongo.Collection
	wordCollections *mongo.Collection
}

func NewMongoWordCollectionRepo(mongo *mongo.Client) *MongoWordCollectionRepo {
	collection := mongo.Database("collection")
	return &MongoWordCollectionRepo{
		mongo:           mongo,
		words:           collection.Collection("words"),
		wordPairs:       collection.Collection("wordPairs"),
		wordCollections: collection.Collection("wordCollections"),
	}
}

func (repo *MongoWordCollectionRepo) SaveCollection(
	ctx context.Context,
	collection *models.WordCollection) (primitive.ObjectID, error) {
	var err error
	res, err := repo.wordCollections.
		InsertOne(ctx, collection)
	if err != nil {
		msg := "saving word collection failed"
		log.Printf("%s = %s", msg, err.Error())
		return primitive.NilObjectID, fmt.Errorf(msg)
	}
	return res.InsertedID.(primitive.ObjectID), nil //panic?
}

func (repo *MongoWordCollectionRepo) SaveWordPair(
	ctx context.Context,
	pair *models.WordPair) (primitive.ObjectID, error) {
	var err error
	res, err := repo.wordPairs.
		InsertOne(ctx, pair)
	if err != nil {
		msg := "saving word pair failed"
		log.Printf("%s = %s", msg, err.Error())
		return primitive.NilObjectID, fmt.Errorf(msg)
	}
	return res.InsertedID.(primitive.ObjectID), nil //panic?
}

func (repo *MongoWordCollectionRepo) SaveWord(
	ctx context.Context,
	word *models.Word) (primitive.ObjectID, error) {
	var err error
	res, err := repo.words.
		InsertOne(ctx, word)
	if err != nil {
		msg := "saving word failed"
		log.Printf("%s = %s", msg, err.Error())
		return primitive.NilObjectID, fmt.Errorf(msg)
	}
	return res.InsertedID.(primitive.ObjectID), nil //panic?
}

func (repo *MongoWordCollectionRepo) GetCollectionNamesAndIdsByUserId(
	ctx context.Context,
	userId primitive.ObjectID) (*[]models.WordCollection, error) {
	var collections []models.WordCollection
	opts := options.Find().
		SetProjection(bson.D{{"_id", 1}, {"name", 1}})// todo to argument?
	cursor, err := repo.wordCollections.
		Find(ctx, bson.M{"ownerId": userId}, opts)
	if err != nil {
		msg := "failed find collections"
		log.Printf("%s = %s", msg, err.Error())
		return nil, fmt.Errorf(msg)
	}
	err = cursor.All(ctx, &collections)
	if err != nil {
		msg := "incorrect collections found"
		log.Printf("%s = %s", msg, err.Error())
		return nil, fmt.Errorf(msg)
	}
	return &collections, nil
}
