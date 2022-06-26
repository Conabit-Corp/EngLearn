import "./formNewWord.components.scss";

export const FormNewWord = (): JSX.Element => {
  return (
    <div className="formNewWord">
      <input type="text" placeholder="English word" className="formNewWord__input" />
      <input type="text" placeholder="Russian word" className="formNewWord__input" />
      <button className="formNewWord__button">Add word</button>
    </div>
  )
}
