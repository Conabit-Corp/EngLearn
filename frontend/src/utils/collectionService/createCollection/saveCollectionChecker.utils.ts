import { NavigateFunction } from "react-router-dom";
import { AnyAction, Dispatch } from "redux";
import { WordPair } from "../../../../proto/conabit/englearn/collection/collection_models_pb";
import { createCollectionRequest } from "../../../apiGRPC/collectionService";
import { WordObj } from "../../../pages/createCollection/createCollection.pages";

//Здесь так же будет проверка для слов
//Одна из проверок нету ли {eng: hello, ru: hello}
export const saveCollectionChecker = (
  collectionTitle: string,
  collectionDescription: string,
  words: Array<WordPair.AsObject>,
  navigate: NavigateFunction,
  dispatch: Dispatch<AnyAction>,
) => {
  if (collectionTitle.length < 1) {
    dispatch({ type: "OPEN_SNACKBAR", text: "Enter a collection name", severity: "error" })
  } else {
    createCollectionRequest(collectionTitle, collectionDescription, words, navigate);
    // navigate(-1);
  }
}
