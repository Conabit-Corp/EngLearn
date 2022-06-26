import { useState } from "react";
import { FormNewWord } from "./formNewWord.components";
import { NewWordsTable } from "./newWordsTable/newWordsTable.components";

export type WordObj = {
  eng: string,
  ru: string
}

export const AddingNewWords = (): JSX.Element => {

  const [words, setWords] = useState<Array<WordObj>>([]);

  return (
    <>
      <FormNewWord words={words} setWords={setWords} />
      <NewWordsTable words={words} setWords={setWords} />
    </>
  )
}
