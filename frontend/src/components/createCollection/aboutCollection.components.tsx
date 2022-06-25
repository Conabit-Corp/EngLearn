import "./aboutCollection.components.scss";

export const AboutCollection = (): JSX.Element => {
  return (
    <div className="aboutCollectiion">
      <input
        type="text"
        placeholder="Untitled"
        className="aboutCollectiion__input aboutCollectiion__titleInput"
      />
      <input
        type="text"
        placeholder="Description..."
        className="aboutCollectiion__input aboutCollectiion__descriptionInput"
      />
    </div>
  )
}
