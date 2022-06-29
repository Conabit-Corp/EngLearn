import "./collectionItem.components.scss";

interface Props {
  collectionName: string;
}

export const CollectionItem = (props: Props): JSX.Element => {
  return (
    <div className="collection">
      <div className="collection__title">{props.collectionName}</div>
      <div className="collection__description">
        Want to get description by request...
      </div>
    </div>
  );
};
