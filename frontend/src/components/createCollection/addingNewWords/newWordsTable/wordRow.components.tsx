import "./wordRow.components.scss";

export const WordRow = (): JSX.Element => {
  return (
    <div className="wordRow">
      <input type="text" placeholder="engWord" className="wordRow__input" />
      <input type="text" placeholder="ruWord" className="wordRow__input" />
      <a className="wordRow__deleteButton">del</a>
    </div>
  )
}
