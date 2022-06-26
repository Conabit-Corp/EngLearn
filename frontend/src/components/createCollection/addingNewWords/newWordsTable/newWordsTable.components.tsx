import "./newWordsTable.components.scss";
import { WordRow } from "./wordRow.components";
import { WordObj } from "../addingNewWords.components";

interface Props {
  words: Array<WordObj>,
  setWords: React.Dispatch<React.SetStateAction<Array<WordObj>>>,
}

export const NewWordsTable = (props: Props): JSX.Element => {
  return (
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
              //key должен быть уникальным, использование index нестабильно
              key={word.eng + word.ru + index}
            />
          )
        })
      }
    </div>
  )
}
