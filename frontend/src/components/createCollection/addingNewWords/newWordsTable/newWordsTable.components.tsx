import "./newWordsTable.components.scss";
import { WordRow } from "./wordRow.components";
import { WordObj } from "../../../../pages/createCollection/createCollection.pages";
import { WordPair } from "../../../../../proto/conabit/englearn/collection/collection_models_pb";

interface Props {
  words: Array<WordPair.AsObject>,
  setWords: React.Dispatch<React.SetStateAction<Array<WordPair.AsObject>>>,
}

export const NewWordsTable = (props: Props): JSX.Element => {

  function removeWord(index: number): void {
    console.log(index);

    let newWordsArray: WordPair.AsObject[] = JSON.parse(JSON.stringify(props.words));
    newWordsArray.splice(index, 1);

    props.setWords(newWordsArray)
  }

  return (
    <>
      {props.words !== undefined ?
        <div className={props.words.length < 1 ? "newWordsTable_noWords" : "newWordsTable"}>
          {props.words.length < 1 ?
            <span className="newWordsTable__warning">
              You can add words now or in the future
            </span>
            :
            props.words.map((word, index): JSX.Element => {
              return (
                <WordRow
                  word={word}
                  setWords={props.setWords}
                  index={index}
                  removeWord={removeWord}
                  key={word.id}
                />
              )
            })
          }
        </div>
        :
        null
      }

    </>
  )
}
