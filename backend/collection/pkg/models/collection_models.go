package models

import (
	collectionGen "github.com/Conabit-Corp/EngLearn/proto/conabit/englearn/collection"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type WordCollection struct {
	ID           primitive.ObjectID `bson:"_id,omitempty"`
	OwnerId      primitive.ObjectID `bson:"ownerId,omitempty"`
	GroupId      primitive.ObjectID `bson:"groupId,omitempty"`
	CountryCode1 string             `bson:"countryCode1,omitempty"`
	CountryCode2 string             `bson:"countryCode2,omitempty"`
	Name         string             `bson:"name,omitempty"`
	Description  string             `bson:"description,omitempty"`
	WordPairs    []WordPair         `bson:"wordPairs,omitempty"`
}

type WordPair struct {
	ID    primitive.ObjectID `bson:"_id,omitempty"`
	Word1 Word               `bson:"word1,omitempty"`
	Word2 Word               `bson:"word2,omitempty"`
}

type Word struct {
	Value       string `bson:"value,omitempty"`
	CountryCode string `bson:"countryCode,omitempty"`
}

func WordCollectionFromProto(collection *collectionGen.WordCollection) *WordCollection {
	id, err := primitive.ObjectIDFromHex(collection.Id)
	if err != nil {
		id = primitive.NilObjectID
	}
	var pairs []WordPair
	for _, pair := range collection.Words {
		pairs = append(pairs, *WordPairFromProto(pair))
	}
	r := &WordCollection{
		ID:           id,
		Name:         collection.Name,
		Description:  collection.Description,
		CountryCode1: collection.CountryCode_1,
		CountryCode2: collection.CountryCode_2,
		WordPairs:    pairs,
	}
	return r
}

func WordPairFromProto(pair *collectionGen.WordPair) *WordPair {
	id, err := primitive.ObjectIDFromHex(pair.Id)
	if err != nil {
		id = primitive.NilObjectID
	}
	w1 := WordFromProto(pair.Word_1)
	w2 := WordFromProto(pair.Word_2)
	return &WordPair{ID: id, Word1: *w1, Word2: *w2}
}

func WordFromProto(word *collectionGen.Word) *Word {
	return &Word{
		Value:       word.Value,
		CountryCode: word.CountryCode,
	}
}

func WordCollectionToProto(collection *WordCollection) *collectionGen.WordCollection {
	var pairs []*collectionGen.WordPair
	for _, pair := range collection.WordPairs {
		pairs = append(pairs, WordPairToProto(&pair))
	}
	return &collectionGen.WordCollection{
		Id:          collection.ID.Hex(),
		Name:        collection.Name,
		Description: collection.Description,
		Words:       pairs,
	}
}

func WordPairToProto(pair *WordPair) *collectionGen.WordPair {
	return &collectionGen.WordPair{
		Id:     pair.ID.Hex(),
		Word_1: WordToProto(&pair.Word1),
		Word_2: WordToProto(&pair.Word2),
	}
}

func WordToProto(word *Word) *collectionGen.Word {
	return &collectionGen.Word{
		Value:       word.Value,
		CountryCode: word.CountryCode,
	}
}
