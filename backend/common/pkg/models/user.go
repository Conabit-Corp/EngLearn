package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	ID           primitive.ObjectID `bson:"_id,omitempty"`
	// DictionaryId primitive.ObjectID `bson:"dictionaryId,omitempty"`
	Nickname     string             `bson:"nickname,omitempty"`
	PasswordHash string             `bson:"password,omitempty"`
}
