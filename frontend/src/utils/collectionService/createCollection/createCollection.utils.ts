import { WordCollection, WordPair } from "../../../../proto/conabit/englearn/collection/collection_models_pb";
import { newWordPair } from "../newWordPair.utils";

export const newWordCollection = (
  collectionTitle: string,
  collectionDescription: string,
  words: Array<WordPair.AsObject>
): WordCollection => {
  const collection = new WordCollection()
  collection.setCountryCode1("en")
  collection.setCountryCode2("ru")
  collection.setName(collectionTitle)
  collection.setDescription(collectionDescription)
  for (let i = 0; i < words.length; i++) {
    collection.addWords(newWordPair(words[i]))
  }
  return collection;
}
