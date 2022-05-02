package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type WordCollection struct {
	ID          primitive.ObjectID   `bson:"_id,omitempty"`
	OwnerId     primitive.ObjectID   `bson:"ownerId,omitempty"`
	Name        string               `bson:"name,omitempty"`
	Description string               `bson:"description,omitempty"`
	WordPairs   []primitive.ObjectID `bson:"wordPairs,omitempty"`
}

type WordPair struct {
	ID      primitive.ObjectID `bson:"_id,omitempty"`
	Word1Id primitive.ObjectID `bson:"word1Id,omitempty"`
	Word2Id primitive.ObjectID `bson:"word2Id,omitempty"`
}

type Word struct {
	ID          primitive.ObjectID `bson:"_id,omitempty"`
	Value       string             `bson:"value,omitempty"`
	CountryCode string             `bson:"countryCode,omitempty"`
}
