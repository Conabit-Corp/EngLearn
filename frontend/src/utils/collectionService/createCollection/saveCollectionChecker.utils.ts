import { NavigateFunction } from "react-router-dom";
import { createCollectionRequest } from "../../../apiGRPC/collectionService";
import { WordObj } from "../../../pages/createCollection/createCollection.pages";

//Здесь так же будет проверка для слов
//Одна из проверок нету ли {eng: hello, ru: hello}
export const saveCollectionChecker = (
  collectionTitle: string,
  collectionDescription: string,
  words: Array<WordObj>,
  navigate: NavigateFunction,
) => {
  if (collectionTitle.length < 1) {
    alert('Название введи');
  } else {
    createCollectionRequest(collectionTitle, collectionDescription, words);
    navigate(-1);
  }
}
