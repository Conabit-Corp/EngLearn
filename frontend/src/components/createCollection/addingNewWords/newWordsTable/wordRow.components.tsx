import "./wordRow.components.scss";
import { WordObj } from "../../../../pages/createCollection/createCollection.pages";

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
          //Для обновления объекта внутри состояния мы копируем всё состояние на каждом изменении инпута и перезаписываем с новым оъектом.
          props.setWords((prevState: Array<WordObj>) =>
            prevState.map((item, index) =>
              index === props.index
                ? { ...item, eng: e.target.value }
                : item
            )
          )
        }}
      />
      <input
        type="text"
        placeholder={props.word.ru}
        className="wordRow__input"
        defaultValue={props.word.ru}
        onChange={e => {
          props.setWords((prevState: any[]) =>
            prevState.map((item, index) =>
              index === props.index
                ? { ...item, ru: e.target.value }
                : item
            )
          )
        }}
      />
      <a className="wordRow__deleteButton" onClick={() => props.removeWord(props.index)}>del</a>
    </div>
  )
}