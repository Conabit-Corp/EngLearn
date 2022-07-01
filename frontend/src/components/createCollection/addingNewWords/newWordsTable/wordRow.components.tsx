import "./wordRow.components.scss";
import { WordObj } from "../../../../pages/createCollection/createCollection.pages";
import { BinSvg } from "../../../../images/bin";

interface Props {
  word: WordObj,
  setWords: React.Dispatch<React.SetStateAction<Array<WordObj>>>,
  index: number,
  removeWord: Function,
}

export const WordRow = (props: Props): JSX.Element => {
  return (
    <div className="wordRow">
      <input
        type="text"
        className="wordRow__input"
        placeholder={props.word.eng}
        defaultValue={props.word.eng}
        onChange={e => {
          let value = e.target.value;
          value = value.replace(/[^A-Za-z\-\s]/ig, '');
          props.setWords((prevState: Array<WordObj>) =>
            prevState.map((item, index) =>
              index === props.index
                ? { ...item, eng: value }
                : item
            )
          )
        }}
        value={props.word.eng}
      />
      <input
        type="text"
        placeholder={props.word.ru}
        className="wordRow__input"
        defaultValue={props.word.ru}
        onChange={e => {
          let value = e.target.value;
          value = value.replace(/[^А-ЯЁа-яё\-\s]*/ig, '');
          props.setWords((prevState: Array<WordObj>) =>
            prevState.map((item, index) =>
              index === props.index
                ? { ...item, ru: value }
                : item
            )
          )
        }}
        value={props.word.ru}
      />
      <a className="wordRow__deleteButton" onClick={() => props.removeWord(props.index)}>
        <BinSvg className="wordRow__deleteButtonIcon" />
      </a>
    </div>
  )
}
