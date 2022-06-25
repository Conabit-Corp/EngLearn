import "./aboutCollection.components.scss";

export const AboutCollection = (): JSX.Element => {
  return (
    <div className="aboutCollectiion">
      <input
        type="text"
        placeholder="Untitled"
        className="aboutCollectiion_input aboutCollectiion_titleInput"
      />
      <input
        type="text"
        placeholder="Description..."
        className="aboutCollectiion_input aboutCollectiion_descriptionInput"
      />
    </div>
  )
}
