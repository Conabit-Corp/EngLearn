package serivces

import (
	"context"
	"fmt"

	"github.com/Conabit-Corp/EngLearn/backend/collection/internal/repos"
	"github.com/Conabit-Corp/EngLearn/backend/collection/pkg/models"
	commonServices "github.com/Conabit-Corp/EngLearn/backend/common/pkg/services"
	collectionGen "github.com/Conabit-Corp/EngLearn/proto/conabit/englearn/collection"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type WordCollectionSerivce struct {
	collectionRepo *repos.MongoWordCollectionRepo
}

func NewWordCollectionService(collectionRepo *repos.MongoWordCollectionRepo) *WordCollectionSerivce {
	return &WordCollectionSerivce{
		collectionRepo: collectionRepo,
	}
}

//todo
func (service *WordCollectionSerivce) CreateGroupWordCollection(
	ctx context.Context,
	req *collectionGen.CreateGroupCollectionRequest) (*collectionGen.CreateWordCollectionResponse, error) {
	return nil, nil
}

//todo
func (service *WordCollectionSerivce) GetGroupWordCollections(
	ctx context.Context,
	req *collectionGen.GetGroupCollectionsRequest) (*collectionGen.GetGroupCollectionsResponse, error) {
	return nil, nil
}

func (service *WordCollectionSerivce) CreateWordCollection(
	ctx context.Context,
	req *collectionGen.CreateWordCollectionRequest) (*collectionGen.CreateWordCollectionResponse, error) {
	userId, err := userIdFromCtx(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
	}
	err = service.validateRequestCollection(req.WordCollection)
	if err != nil {
		return nil, err
	}
	collection := models.WordCollectionFromProto(req.WordCollection)
	collection.OwnerId = userId
	collectionId, err := service.collectionRepo.SaveCollection(ctx, collection)
	return &collectionGen.CreateWordCollectionResponse{
		CollectionId: collectionId.Hex(),
	}, nil
}

func (service *WordCollectionSerivce) GetUserWordCollections(
	ctx context.Context,
	req *collectionGen.GetUserCollectionsRequest) (*collectionGen.GetUserCollectionsResponse, error) {
	userId, err := userIdFromCtx(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
	}
	collections, err := service.collectionRepo.GetCollectionNamesAndIdsByUserId(ctx, userId)
	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
	}
	overviews := []*collectionGen.CollectionsOverview_Overview{}
	for _, collection := range *collections {
		overviews = append(overviews, &collectionGen.CollectionsOverview_Overview{
			CollectionName: collection.Name,
			CollectionId:   collection.ID.Hex(),
		})
	}
	return &collectionGen.GetUserCollectionsResponse{
		Collections: &collectionGen.CollectionsOverview{
			Collections: overviews,
		},
	}, nil
}

func (service *WordCollectionSerivce) GetWordCollection(
	ctx context.Context,
	req *collectionGen.GetWordCollectionRequest) (*collectionGen.GetWordCollectionResponse, error) {
	if req.CollectionId == "" {
		return nil, status.Errorf(codes.InvalidArgument, "Collection id empty")
	}
	userId, err := userIdFromCtx(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
	}
	collectionId, err := primitive.ObjectIDFromHex(req.CollectionId)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "invalid collection id format")
	}
	collection, err := service.collectionRepo.GetUserCollectionById(ctx, userId, collectionId)
	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
	}
	return &collectionGen.GetWordCollectionResponse{
		Collection: models.WordCollectionToProto(collection),
	}, nil
}

func (service *WordCollectionSerivce) DeleteWordCollection(
	ctx context.Context,
	req *collectionGen.DeleteWordCollectionRequest) (*collectionGen.DeleteWordCollectionResponse, error) {
	userId, err := userIdFromCtx(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
	}
	collectionId, err := primitive.ObjectIDFromHex(req.CollectionId)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "invalid collection id format")
	}
	collection, err := service.collectionRepo.DeleteWordCollection(ctx, userId, collectionId)
	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
	}
	return &collectionGen.DeleteWordCollectionResponse{
		Collection: models.WordCollectionToProto(collection),
	}, nil
}

func (service *WordCollectionSerivce) AddWordToCollection(
	ctx context.Context,
	req *collectionGen.AddWordToCollectionRequest) (*collectionGen.AddWordToCollectionResponse, error) {
	userId, err := userIdFromCtx(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
	}
	collectionId, err := primitive.ObjectIDFromHex(req.CollectionId)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "invalid collection id format")
	}
	err = service.canAddWordToCollection(ctx, userId, collectionId, req.WordPair)
	if err != nil {
		return nil, err
	}
	pair := models.WordPairFromProto(req.WordPair)
	id, err := service.collectionRepo.SaveWordPair(ctx, userId, collectionId, pair)
	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
	}
	return &collectionGen.AddWordToCollectionResponse{
		WordPairId: id.Hex(),
	}, nil
}

func (service *WordCollectionSerivce) RemoveWordFromCollection(
	ctx context.Context,
	req *collectionGen.RemoveWordFromCollectionRequest) (*collectionGen.RemoveWordFromCollectionResponse, error) {
	userId, err := userIdFromCtx(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
	}
	collectionId, err := primitive.ObjectIDFromHex(req.CollectionId)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "invalid collection id format")
	}
	wordPairId, err := primitive.ObjectIDFromHex(req.WordPairId)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "invalid word pair id format")
	}
	wordPair, err := service.collectionRepo.
		DeleteWordPairFromCollection(ctx, userId, collectionId, wordPairId)
	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
	}
	return &collectionGen.RemoveWordFromCollectionResponse{
		WordPair: models.WordPairToProto(wordPair),
	}, nil
}

func (service *WordCollectionSerivce) EditWordFromCollection(
	ctx context.Context,
	req *collectionGen.EditWordFromCollectionRequest) (*collectionGen.EditWordFromCollectionResponse, error) {
	userId, err := userIdFromCtx(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
	}
	collectionId, err := primitive.ObjectIDFromHex(req.CollectionId)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "invalid collection id format")
	}
	err = service.canAddWordToCollection(ctx, userId, collectionId, req.WordPair)
	if err != nil {
		return nil, err
	}
	wordPair := models.WordPairFromProto(req.WordPair)
	_, err = service.collectionRepo.UpdateWordPair(ctx, userId, collectionId, wordPair)
	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
	}
	return &collectionGen.EditWordFromCollectionResponse{
		Success: true,
	}, nil
}

func (service *WordCollectionSerivce) validateRequestCollection(collection *collectionGen.WordCollection) error {
	if collection.CountryCode_1 == collection.CountryCode_2 {
		return status.Errorf(codes.InvalidArgument, "a collection have same country codes")
	}
	for _, pair := range collection.Words {
		err := service.validateRequestWordPair(collection.CountryCode_1, collection.CountryCode_2, pair)
		if err != nil {
			return err
		}
	}
	return nil
}

func (service *WordCollectionSerivce) canAddWordToCollection(
	ctx context.Context,
	userId primitive.ObjectID,
	collectionId primitive.ObjectID,
	wordPairProto *collectionGen.WordPair) error {
	collection, err := service.collectionRepo.GetUserCollectionCountryCodes(ctx, userId, collectionId)
	if err != nil {
		return status.Errorf(codes.Internal, err.Error())
	}
	err = service.validateRequestWordPair(
		collection.CountryCode1, collection.CountryCode2, wordPairProto)
	if err != nil {
		return err
	}
	return nil
}

func (service *WordCollectionSerivce) validateRequestWordPair(
	code1 string, code2 string, wordPairProto *collectionGen.WordPair) error {
	if wordPairProto.Word_1.Value == wordPairProto.Word_2.Value {
		return status.Errorf(codes.InvalidArgument, "one of word pairs have same words")
	}
	if !(code1 == wordPairProto.Word_1.CountryCode && code2 == wordPairProto.Word_2.CountryCode ||
		code1 == wordPairProto.Word_2.CountryCode && code2 == wordPairProto.Word_1.CountryCode) {
		return status.Errorf(codes.InvalidArgument,
			"one of word pairs have country codes not the same as the collection")
	}
	if !commonServices.IsSingleWord(wordPairProto.Word_1.Value) ||
		!commonServices.IsSingleWord(wordPairProto.Word_2.Value) {
		return status.Errorf(codes.InvalidArgument,
			"one of word pairs contains invalid value, must have single word")
	}
	return nil
}

func userIdFromCtx(ctx context.Context) (primitive.ObjectID, error) {
	id, ok := ctx.Value("user_id").(string)
	if !ok {
		return primitive.NilObjectID, fmt.Errorf("can't get user session")
	}
	usrId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return primitive.NilObjectID, fmt.Errorf("user session invalid")
	}
	return usrId, nil
}
