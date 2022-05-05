package repos

import (
	"github.com/Conabit-Corp/EngLearn/backend/collection/pkg/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func userCollectionFilter(userId primitive.ObjectID, collectionId primitive.ObjectID) bson.M {
	return bson.M{
		"_id":     collectionId,
		"ownerId": userId,
	}
}

func userCollectionsFilter(userId primitive.ObjectID) bson.M {
	return bson.M{
		"ownerId": userId,
	}
}

func userCollectionWordPairFilter(userId primitive.ObjectID,
	collectionId primitive.ObjectID, wordPairId primitive.ObjectID) bson.M {
	return bson.M{
		"_id":     collectionId,
		"ownerId": userId,
		"wordPairs": bson.M{
			"_id": wordPairId,
		},
	}
}

func getUserCollectionWordPairQuery(userId primitive.ObjectID,
	collectionId primitive.ObjectID, wordPairId primitive.ObjectID) bson.M {
	return bson.M{
		"_id":     collectionId,
		"ownerId": userId,
		"wordPairs": bson.M{
			"$elemMatch": bson.M{
				"_id": wordPairId,
			},
		},
	}
}

func pushPairToCollectionQuery(pair *models.WordPair) bson.M {
	return bson.M{
		"$push": bson.M{
			"wordPairs": pair,
		},
	}
}

func pullWordPairFromCollectionQuery(wordPairId primitive.ObjectID) bson.M {
	return bson.M{
		"$pull": bson.M{
			"wordPairs": bson.M{
				"_id": wordPairId,
			},
		},
	}
}

func wordPairsProjection() bson.M {
	return bson.M{
		"wordPairs": 1,
	}
}

func collectionIdAndNameProjection() bson.M {
	return bson.M{
		"_id":  1,
		"name": 1,
	}
}
