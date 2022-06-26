import { FormNewWord } from "./formNewWord.components";
import { NewWordsTable } from "./newWordsTable/newWordsTable.components";

export const AddingNewWords = (): JSX.Element => {
  return (
    <>
      <FormNewWord />
      <NewWordsTable />
    </>
  )
}
