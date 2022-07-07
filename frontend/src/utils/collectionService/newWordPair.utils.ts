import { Word, WordPair } from "../../../proto/conabit/englearn/collection/collection_models_pb";

export const newWordPair = (word: WordPair.AsObject): WordPair => {
  const pair = new WordPair()
  const w1 = new Word()
  w1.setCountryCode(word.word1?.countryCode!)
  w1.setValue(word.word1?.value!)

  const w2 = new Word()
  w2.setCountryCode(word.word2?.countryCode!)
  w2.setValue(word.word2?.value!)

  pair.setWord1(w1)
  pair.setWord2(w2)
  return pair
}
