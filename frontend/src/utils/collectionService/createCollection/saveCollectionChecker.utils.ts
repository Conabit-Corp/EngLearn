import { createCollectionRequest } from "../../../apiGRPC/collectionService";
import { WordObj } from "../../../pages/createCollection/createCollection.pages";

//Здесь так же будет проверка для слов
export const saveCollectionChecker = (
  collectionTitle: string,
  collectionDescription: string,
  words: Array<WordObj>
) => {
  if (collectionTitle.length < 1) {
    alert('Название введи');
  } else {
    createCollectionRequest(collectionTitle, collectionDescription, words)
  }
}
