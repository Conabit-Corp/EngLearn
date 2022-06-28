import { Word, WordPair } from "../../../proto/conabit/englearn/collection/collection_models_pb";
import { WordObj } from "../../pages/createCollection/createCollection.pages";

export const newWordPair = (word: WordObj): WordPair => {
  const pair = new WordPair()
  const w1 = new Word()
  w1.setCountryCode("ru")
  w1.setValue(word.ru)

  const w2 = new Word()
  w2.setCountryCode("en")
  w2.setValue(word.eng)

  pair.setWord1(w1)
  pair.setWord2(w2)
  return pair
}
