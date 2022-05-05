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

//fixme???
func (repo *MongoWordCollectionRepo) UpdateWordPair(
	ctx context.Context,
	userId primitive.ObjectID,
	collectionId primitive.ObjectID,
	pair *models.WordPair) (primitive.ObjectID, error) {
	_, err := repo.DeleteWordPairFromCollection(ctx, userId, collectionId, pair.ID)
	if err != nil {
		return primitive.NilObjectID, err
	}
	id, err := repo.SaveWordPair(ctx, userId, collectionId, pair)
	if err != nil {
		return primitive.NilObjectID, err
	}
	return id, nil
}

func (repo *MongoWordCollectionRepo) SaveWordPair(
	ctx context.Context,
	userId primitive.ObjectID,
	collectionId primitive.ObjectID,
	pair *models.WordPair) (primitive.ObjectID, error) {
	exists := repo.userCollectionExists(ctx, userId, collectionId)
	if !exists {
		return primitive.NilObjectID, fmt.Errorf("collection not found")
	}
	pair.ID = primitive.NewObjectID()
	_, err := repo.wordCollections.
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
	exists := repo.userCollectionExists(ctx, userId, collectionId)
	if !exists {
		return nil, fmt.Errorf("collection not found")
	}
	var collection models.WordCollection
	err := repo.wordCollections.
		FindOne(ctx, bson.M{"_id": collectionId, "ownerId": userId}).
		Decode(&collection)
	if err != nil {
		log.Printf("error while getting word collections = %s", err.Error())
		return nil, fmt.Errorf("internal error")
	}
	return &collection, nil
}

func (repo *MongoWordCollectionRepo) DeleteWordCollection(
	ctx context.Context,
	userId primitive.ObjectID,
	collectionId primitive.ObjectID) (*models.WordCollection, error) {
	collection, err := repo.GetUserCollectionById(ctx, userId, collectionId)
	if err != nil {
		return nil, err
	}
	_, err = repo.wordCollections.
		DeleteOne(ctx, bson.M{"_id": collectionId, "ownerId": userId})
	if err != nil {
		msg := "error while deleting word collection"
		log.Printf("%s = %s", msg, err.Error())
		return nil, fmt.Errorf(msg)
	}
	return collection, nil
}

func (repo *MongoWordCollectionRepo) DeleteWordPairFromCollection(
	ctx context.Context,
	userId primitive.ObjectID,
	collectionId primitive.ObjectID,
	wordPairId primitive.ObjectID) (*models.WordPair, error) {
	exists := repo.userCollectionExists(ctx, userId, collectionId)
	if !exists {
		return nil, fmt.Errorf("user word collection not found")
	}
	pair, err := repo.getUserCollectionWordPair(ctx, userId, collectionId, wordPairId)
	if err != nil {
		msg := "error while getting word pair"
		log.Printf("%s = %s", msg, err.Error())
		return nil, fmt.Errorf(msg)
	}
	err = repo.deleteUserCollectionWordPair(ctx, userId, collectionId, wordPairId)
	if err != nil {
		msg := "error while deleting word pair"
		log.Printf("%s = %s", msg, err.Error())
		return nil, fmt.Errorf(msg)
	}
	return pair, nil
}

func (repo *MongoWordCollectionRepo) userCollectionWordPairExists(
	ctx context.Context,
	userId primitive.ObjectID,
	collectionId primitive.ObjectID,
	wordPairId primitive.ObjectID) bool {
	count, err := repo.wordCollections.
		CountDocuments(ctx, bson.M{
			"_id":     collectionId,
			"ownerId": userId,
			"wordPairs": bson.M{
				"_id": wordPairId,
			}})
	if err != nil {
		log.Printf("error while getting word pair info = %s", err.Error())
		return false
	}
	if count == 0 {
		return false
	}
	if count > 1 {
		log.Printf(
			`duplicate word pairs found, 
				collection id = %d,
				word pair id = %d,
				user id = %d`,
			collectionId, userId, wordPairId)
		return false
	}
	return true
}

func (repo *MongoWordCollectionRepo) userCollectionExists(ctx context.Context,
	userId primitive.ObjectID,
	collectionId primitive.ObjectID) bool {
	count, err := repo.wordCollections.
		CountDocuments(ctx,
			bson.M{
				"_id":     collectionId,
				"ownerId": userId,
			})
	if err != nil {
		log.Printf("error while getting word pair info = %s", err.Error())
		return false
	}
	if count == 0 {
		return false
	}
	if count > 1 {
		log.Printf(
			`duplicate word collections found,
				collection id = %d,
				user id = %d`,
			collectionId, userId)
		return false
	}
	return true
}

func (repo *MongoWordCollectionRepo) getUserCollectionWordPair(
	ctx context.Context,
	userId primitive.ObjectID,
	collectionId primitive.ObjectID,
	wordPairId primitive.ObjectID) (*models.WordPair, error) {
	var collection models.WordCollection
	opts := options.FindOne().SetProjection(bson.M{"wordPairs": 1})
	err := repo.wordCollections.
		FindOne(ctx,
			bson.M{
				"_id":     collectionId,
				"ownerId": userId,
				"wordPairs": bson.M{
					"$elemMatch": bson.M{
						"_id": wordPairId,
					},
				},
			}, opts).
		Decode(&collection)
	if err != nil {
		return nil, err
	}
	if len(collection.WordPairs) == 0 {
		return nil, fmt.Errorf("word pair not found")
	}
	if len(collection.WordPairs) != 1 {
		return nil, fmt.Errorf("found more then 1 word pairs")
	}
	return &collection.WordPairs[0], nil
}

func (repo *MongoWordCollectionRepo) deleteUserCollectionWordPair(
	ctx context.Context,
	userId primitive.ObjectID,
	collectionId primitive.ObjectID,
	wordPairId primitive.ObjectID) error {
	_, err := repo.wordCollections.
		UpdateOne(ctx,
			bson.M{
				"_id":     collectionId,
				"ownerId": userId,
			},
			bson.M{
				"$pull": bson.M{
					"wordPairs": bson.M{
						"_id": wordPairId,
					},
				},
			},
		)
	return err
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