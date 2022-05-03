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
	wordCollections *mongo.Collection
}

func NewMongoWordCollectionRepo(mongo *mongo.Client) *MongoWordCollectionRepo {
	collection := mongo.Database("collection")
	return &MongoWordCollectionRepo{
		mongo:           mongo,
		wordCollections: collection.Collection("wordCollections"),
	}
}

func (repo *MongoWordCollectionRepo) SaveCollection(
	ctx context.Context,
	collection *models.WordCollection) (primitive.ObjectID, error) {
	var err error
	collection.ID = primitive.NewObjectID()
	for i := 0; i < len(collection.WordPairs); i++ {
		collection.WordPairs[i].ID = primitive.NewObjectID()
	}
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
	userId primitive.ObjectID,
	collectionId primitive.ObjectID,
	pair *models.WordPair) (primitive.ObjectID, error) {
	var err error
	exists, err := repo.userCollectionExists(ctx, userId, collectionId)
	if err != nil {
		log.Printf("error while getting word collections = %s", err.Error())
		return primitive.NilObjectID, fmt.Errorf("internal error")
	}
	if !exists {
		return primitive.NilObjectID, fmt.Errorf("collection not found")
	}
	pair.ID = primitive.NewObjectID()
	_, err = repo.wordCollections.
		UpdateOne(ctx,
			bson.M{"_id": collectionId, "ownerId": userId},
			bson.M{"$push": bson.M{"wordPairs": pair}})
	if err != nil {
		msg := "saving word pair failed"
		log.Printf("%s = %s", msg, err.Error())
		return primitive.NilObjectID, fmt.Errorf(msg)
	}
	return pair.ID, nil
}

func (repo *MongoWordCollectionRepo) GetCollectionNamesAndIdsByUserId(
	ctx context.Context,
	userId primitive.ObjectID) (*[]models.WordCollection, error) {
	opts := options.Find().
		SetProjection(bson.M{"_id": 1, "name": 1})
	return repo.getCollectionsByUserIdWithOptions(ctx, userId, opts)
}

func (repo *MongoWordCollectionRepo) GetUserCollectionById(
	ctx context.Context,
	userId primitive.ObjectID,
	collectionId primitive.ObjectID) (*models.WordCollection, error) {
	exists, err := repo.userCollectionExists(ctx, userId, collectionId)
	if err != nil {
		log.Printf("error while getting word collections = %s", err.Error())
		return nil, fmt.Errorf("internal error")
	}
	if !exists {
		return nil, fmt.Errorf("collection not found")
	}
	var collection models.WordCollection
	err = repo.wordCollections.
		FindOne(ctx, bson.M{"_id": collectionId, "ownerId": userId}).
		Decode(&collection)
	if err != nil {
		log.Printf("error while getting word collections = %s", err.Error())
		return nil, fmt.Errorf("internal error")
	}
	return &collection, nil
}

func (repo *MongoWordCollectionRepo) userCollectionExists(ctx context.Context,
	userId primitive.ObjectID,
	collectionId primitive.ObjectID) (bool, error) {
	count, err := repo.wordCollections.CountDocuments(ctx, bson.M{"_id": collectionId, "ownerId": userId})
	if err != nil {
		return false, err
	}
	if count == 0 {
		return false, nil
	}
	if count > 1 {
		return false,
			fmt.Errorf("duplicate word collections found, collection id = %d, user id = %d",
				collectionId, userId)
	}
	return true, nil
}

func (repo *MongoWordCollectionRepo) getCollectionsByUserIdWithOptions(
	ctx context.Context,
	userId primitive.ObjectID,
	opts *options.FindOptions) (*[]models.WordCollection, error) {
	var collections []models.WordCollection
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
