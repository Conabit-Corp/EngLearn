package services

import (
	"context"
	"fmt"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

func IdsToObjectIds(ids []string) ([]primitive.ObjectID, error) {
	oIds := make([]primitive.ObjectID, len(ids))
	for i := 0; i < len(ids); i++ {
		oId, err := primitive.ObjectIDFromHex(ids[i])
		if err != nil {
			return nil, err
		}
		oIds[i] = oId
	}
	return oIds, nil
}

func UserIdFromCtx(ctx context.Context) (primitive.ObjectID, error) {
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
