import "./collectionItem.components.scss";

interface Props {
  collectionId: string;
  collectionName: string;
  collectionDescription: string;
}

export const CollectionItem = (props: Props): JSX.Element => {
  return (
    <div className="collection">
      <div className="collection__title">{props.collectionName}</div>
      <div className="collection__description">
        {props.collectionDescription}
      </div>
    </div>
  );
};
