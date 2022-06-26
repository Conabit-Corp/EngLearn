import { useState } from "react";
import { FormNewWord } from "./formNewWord.components";
import { NewWordsTable } from "./newWordsTable/newWordsTable.components";

export const AddingNewWords = (): JSX.Element => {

  const [words, setWords] = useState(
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
