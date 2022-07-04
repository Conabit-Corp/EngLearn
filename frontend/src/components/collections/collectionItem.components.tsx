import "./collectionItem.components.scss";
import { CollectionPopupMenuIcon } from "../../images/collections/collectionPopupMenu";

interface Props {
  key: string;
  collectionId: string;
  collectionName: string;
  collectionDescription: string;
}

export const CollectionItem = (props: Props): JSX.Element => {
  return (
    <div className="collection">
      <div className="collection__info">
        <div className="collection__title">{props.collectionName}</div>
        <div className="collection__description">
          {props.collectionDescription}
        </div>
      </div>
      <div className="collection__popupButton">
        <CollectionPopupMenuIcon onClick={() => alert(props.collectionId)} />
      </div>
    </div>
  );
};
