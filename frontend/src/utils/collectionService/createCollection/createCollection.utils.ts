import { WordCollection } from "../../../../proto/conabit/englearn/collection/collection_models_pb";
import { newWordPair } from "../newWordPair.utils";
import { WordObj } from "../../../pages/createCollection/createCollection.pages";

export const newWordCollection = (collectionTitle: string, collectionDescription: string, words: Array<WordObj>): WordCollection => {
  const collection = new WordCollection()
  collection.setCountryCode1("en")
  collection.setCountryCode2("ru")
  collection.setName(collectionTitle)
  collection.setDescription(collectionDescription)
  for (let i = 0; i < words.length; i++) {
    collection.addWords(newWordPair(words[i]))
  }
  console.log(collection.toObject());
  return collection;
}
