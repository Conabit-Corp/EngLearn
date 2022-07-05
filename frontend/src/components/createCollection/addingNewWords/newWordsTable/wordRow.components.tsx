import "./wordRow.components.scss";
import { WordObj } from "../../../../pages/createCollection/createCollection.pages";
import { BinSvg } from "../../../../images/bin";
import { WordPair } from "../../../../../proto/conabit/englearn/collection/collection_models_pb";

interface Props {
  word: WordPair.AsObject,
  setWords: React.Dispatch<React.SetStateAction<Array<WordPair.AsObject>>>,
  index: number,
  removeWord: Function,
}

export const WordRow = (props: Props): JSX.Element => {
  return (
    <div className="wordRow">
      <input
        type="text"
        className="wordRow__input"
        placeholder={props.word.word1?.value}
        defaultValue={props.word.word1?.value}
        onChange={e => {
          let value = e.target.value;
          value = value.replace(/[^A-Za-z\-\s]/ig, '');
          props.setWords((prevState: Array<WordPair.AsObject>) =>
            prevState.map((item, index) =>
              index === props.index
                ? { ...item, eng: value }
                : item
            )
          )
        }}
        value={props.word.word1?.value}
      />
      <input
        type="text"
        placeholder={props.word.word2?.value}
        className="wordRow__input"
        defaultValue={props.word.word2?.value}
        onChange={e => {
          let value = e.target.value;
          value = value.replace(/[^А-ЯЁа-яё\-\s]*/ig, '');
          props.setWords((prevState: Array<WordPair.AsObject>) =>
            prevState.map((item, index) =>
              index === props.index
                ? { ...item, ru: value }
                : item
            )
          )
        }}
        value={props.word.word2?.value}
      />
      <a className="wordRow__deleteButton" onClick={() => props.removeWord(props.index)}>
        <BinSvg className="wordRow__deleteButtonIcon" />
      </a>
    </div>
  )
}
