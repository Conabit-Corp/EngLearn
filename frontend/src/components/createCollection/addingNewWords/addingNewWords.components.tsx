import { FormNewWord } from "./formNewWord.components";
import { NewWordsTable } from "./newWordsTable/newWordsTable.components";
import { WordObj } from "../../../pages/createCollection/createCollection.pages";

interface Props {
  words: Array<WordObj>,
  setWords: React.Dispatch<React.SetStateAction<Array<WordObj>>>,
}

export const AddingNewWords = (props: Props): JSX.Element => {
  return (
    <>
      <FormNewWord column={false} words={props.words} setWords={props.setWords} />
      <NewWordsTable words={props.words} setWords={props.setWords} />
    </>
  )
}
