import "./wordRow.components.scss";

interface Props {
  word: any,
  setWords: any,
  index: number,
}

export const WordRow = (props: Props): JSX.Element => {
  console.log(props.word);

  return (
    <div className="wordRow">
      <input
        type="text"
        className="wordRow__input"
        placeholder={props.word.eng}
        defaultValue={props.word.eng}
      />
      <input
        type="text"
        placeholder={props.word.ru}
        className="wordRow__input"
        defaultValue={props.word.ru}
        onChange={e => {
          //Для обновления объекта внутри состояния мы копируем всё состояние на каждом изменении инпута и перезаписываем с новым оъектом.
          props.setWords((prevState: any[]) =>
            prevState.map((item, index) =>
              index === props.index
                ? { ...item, ru: e.target.value }
                : item
            )
          )
        }}
      />
      <a className="wordRow__deleteButton">del</a>
    </div>
  )
}
