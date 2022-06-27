import "./aboutCollection.components.scss";

interface Props {
  setCollectionTitle: React.Dispatch<React.SetStateAction<string>>,
  setCollectionDescription: React.Dispatch<React.SetStateAction<string>>,
}

export const AboutCollection = (props: Props): JSX.Element => {
  return (
    <div className="aboutCollectiion">
      <input
        type="text"
        placeholder="Untitled"
        className="aboutCollectiion__input aboutCollectiion__titleInput"
        onChange={(e) => props.setCollectionTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description..."
        className="aboutCollectiion__input aboutCollectiion__descriptionInput"
        onChange={(e) => props.setCollectionDescription(e.target.value)}
      />
    </div>
  )
}
