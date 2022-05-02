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
	usrId, err := userIdFromCtx(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
	}
	pairIds := []primitive.ObjectID{}
	for _, pairF := range req.WordCollection.Words {
		id1, err := service.saveWord(ctx, pairF.Word_1)
		if err != nil {
			return nil, status.Errorf(codes.Internal, err.Error())
		}
		id2, err := service.saveWord(ctx, pairF.Word_2)
		if err != nil {
			return nil, status.Errorf(codes.Internal, err.Error())
		}
		pairId, err := service.collectionRepo.
			SaveWordPair(ctx, &models.WordPair{
				Word1Id: id1,
				Word2Id: id2,
			})
		if err != nil {
			return nil, status.Errorf(codes.Internal, err.Error())
		}
		pairIds = append(pairIds, pairId)
	}
	collection := &models.WordCollection{
		OwnerId:     usrId,
		Name:        req.WordCollection.Name,
		Description: req.WordCollection.Description,
		WordPairs:   pairIds,
	}
	collectionId, err := service.collectionRepo.
		SaveCollection(ctx, collection)
	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
	}
	return &collectionGen.CreateWordCollectionResponse{
		CollectionId: collectionId.Hex(),
	}, nil
}

func (service *WordCollectionSerivce) GetUserWordCollections(
	ctx context.Context,
	req *collectionGen.GetUserCollectionsRequest) (*collectionGen.GetUserCollectionsResponse, error) {
	usrId, err := userIdFromCtx(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
	}
	collections, err := service.collectionRepo.GetCollectionNamesAndIdsByUserId(ctx, usrId)
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
	return nil, nil
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
	return nil, nil
}

func (service *WordCollectionSerivce) AddWordToCollection(
	ctx context.Context,
	req *collectionGen.AddWordToCollectionRequest) (*collectionGen.AddWordToCollectionResponse, error) {
	return nil, nil
}

func (service *WordCollectionSerivce) RemoveWordFromCollection(
	ctx context.Context,
	req *collectionGen.RemoveWordFromCollectionRequest) (*collectionGen.RemoveWordFromCollectionResponse, error) {
	return nil, nil
}

func (service *WordCollectionSerivce) EditWordFromCollection(
	ctx context.Context,
	req *collectionGen.EditWordFromCollectionRequest) (*collectionGen.EditWordFromCollectionResponse, error) {
	return nil, nil
}

func (service *WordCollectionSerivce) saveWord(
	ctx context.Context,
	word *collectionGen.Word) (primitive.ObjectID, error) {
	id, err := service.collectionRepo.
		SaveWord(ctx, &models.Word{
			CountryCode: word.CountryCode,
			Value:       word.Value,
		})
	if err != nil {
		return primitive.NilObjectID, err
	}
	return id, err
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
