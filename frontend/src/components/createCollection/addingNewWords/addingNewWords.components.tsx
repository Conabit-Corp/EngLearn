import { useState } from "react";
import { FormNewWord } from "./formNewWord.components";
import { NewWordsTable } from "./newWordsTable/newWordsTable.components";

export type WordObj = {
  eng: string,
  ru: string
}

export const AddingNewWords = (): JSX.Element => {

  const [words, setWords] = useState<Array<WordObj>>(
    [
      { ru: 'просто', eng: 'just' },
      { ru: 'мшка', eng: 'mouse' },
      { ru: 'книга', eng: 'book' },
    ]
  );

  return (
    <>
      <FormNewWord />
      <NewWordsTable words={words} setWords={setWords} />
    </>
  )
}
