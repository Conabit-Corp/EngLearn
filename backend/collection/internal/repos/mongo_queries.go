package repos

import (
	"github.com/Conabit-Corp/EngLearn/backend/collection/pkg/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
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

func userCollectionWordPairAggregate(
	userId primitive.ObjectID,
	collectionId primitive.ObjectID,
	wordPairId primitive.ObjectID) mongo.Pipeline {
	return mongo.Pipeline{
		_matchCollectionIdAndOwnerIdAggregate(collectionId, userId),
		_findWordPairAggregate(wordPairId),
		_projectWordPairsAggregate(),
	}
}

func _findWordPairAggregate(wordPairId primitive.ObjectID) bson.D {
	return bson.D{{
		Key: "$addFields",
		Value: bson.D{{
			Key: "wordPairs",
			Value: bson.D{{
				Key: "$filter",
				Value: bson.D{{
					Key:   "input",
					Value: "$wordPairs",
				}, {
					Key: "cond",
					Value: bson.D{{
						Key:   "$eq",
						Value: bson.A{"$$this._id", wordPairId},
					}},
				}},
			}},
		}},
	}}
}

func _projectWordPairsAggregate() bson.D {
	return bson.D{{
		Key: "$project",
		Value: bson.D{
			{Key: "wordPairs", Value: 1},
			{Key: "_id",Value: 0},
		},
	}}
}

func _matchCollectionIdAndOwnerIdAggregate(
	collectionId primitive.ObjectID,
	ownerId primitive.ObjectID) bson.D {
	return bson.D{
		{Key: "$match",
			Value: bson.D{
				{Key: "_id", Value: collectionId},
				{Key: "ownerId", Value: ownerId},
			},
		},
	}
}

func userCollectionWordPairFilter(
	userId primitive.ObjectID,
	collectionId primitive.ObjectID,
	wordFilter bson.M) bson.M {
	filter := userCollectionFilter(userId, collectionId)
	filter["wordPairs"] = wordFilter
	return filter
}

func word1ValueFilter(value string) bson.M {
	return bson.M{
		"$elemMatch": bson.M{
			"word1": bson.M{
				"value": value,
			},
		},
	}
}

func word2ValueFilter(value string) bson.M {
	return bson.M{
		"$elemMatch": bson.M{
			"word2": bson.M{
				"value": value,
			},
		},
	}
}

func getUserCollectionWordPairQuery(userId primitive.ObjectID,
	collectionId primitive.ObjectID, wordPairId primitive.ObjectID) bson.M {
	filter := userCollectionFilter(userId, collectionId)
	filter["wordPairs"] = bson.M{
		"$elemMatch": bson.M{
			"_id": wordPairId,
		},
	}
	return filter
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

func collectionCountryCodesProjection() bson.M {
	return bson.M{
		"countryCode1": 1,
		"countryCode2": 1,
	}
}
