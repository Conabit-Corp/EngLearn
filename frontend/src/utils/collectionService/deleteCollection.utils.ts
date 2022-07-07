import { NavigateFunction } from "react-router-dom";
import { deleteCollectionRequest } from "../../apiGRPC/collectionService";

export const deleteCollection = (
  navigate: NavigateFunction,
  collectionId: string,
): void => {
  navigate(-1);
  deleteCollectionRequest(collectionId);
  console.log(collectionId);
}
