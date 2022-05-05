package serivces

import (
	"context"
	"fmt"

	"github.com/Conabit-Corp/EngLearn/backend/collection/internal/repos"
	"github.com/Conabit-Corp/EngLearn/backend/collection/pkg/models"
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

func (service *WordCollectionSerivce) CreateWordCollection(
	ctx context.Context,
	req *collectionGen.CreateWordCollectionRequest) (*collectionGen.CreateWordCollectionResponse, error) {
	userId, err := userIdFromCtx(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
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

func (service *WordCollectionSerivce) CreateGroupWordCollection(
	ctx context.Context,
	req *collectionGen.CreateGroupCollectionRequest) (*collectionGen.CreateWordCollectionResponse, error) {
	return nil, nil
}

func (service *WordCollectionSerivce) GetGroupWordCollections(
	ctx context.Context,
	req *collectionGen.GetGroupCollectionsRequest) (*collectionGen.GetGroupCollectionsResponse, error) {
	return nil, nil
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
	wordPair := models.WordPairFromProto(req.WordPair)
	_, err = service.collectionRepo.UpdateWordPair(ctx, userId, collectionId, wordPair)
	if err != nil {
		return nil, status.Errorf(codes.Internal,err.Error())
	}
	return &collectionGen.EditWordFromCollectionResponse{
		Success: true,
	}, nil
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
