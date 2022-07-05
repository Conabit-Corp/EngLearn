import { FormNewWord } from "./formNewWord.components";
import { NewWordsTable } from "./newWordsTable/newWordsTable.components";
import { WordObj } from "../../../pages/createCollection/createCollection.pages";
import { WordPair } from "../../../../proto/conabit/englearn/collection/collection_models_pb";

interface Props {
  words: Array<WordPair.AsObject>,
  setWords: React.Dispatch<React.SetStateAction<Array<WordPair.AsObject>>>,
}

export const AddingNewWords = (props: Props): JSX.Element => {
  return (
    <>
      <FormNewWord column={false} words={props.words} setWords={props.setWords} />
      <NewWordsTable words={props.words} setWords={props.setWords} />
    </>
  )
}
