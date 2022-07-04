import { useState } from "react";
import "./collectionItem.components.scss";
import { CollectionPopupMenuIcon } from "../../images/collections/collectionPopupMenu";
import { CollectionPopper } from "./collectionPopper.components";
import ClickAwayListener from "@mui/material/ClickAwayListener";

interface Props {
  key: string;
  collectionId: string;
  collectionName: string;
  collectionDescription: string;
}

export const CollectionItem = (props: Props): JSX.Element => {
  const [isPoperOpen, setIsPoperOpen] = useState(false);

  const handleClickAway = () => {
    setIsPoperOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="collection">
        <div className="collection__info">
          <div className="collection__title">{props.collectionName}</div>
          <div className="collection__description">
            {props.collectionDescription}
          </div>
        </div>
        <div
          onClick={() =>
            isPoperOpen ? setIsPoperOpen(false) : setIsPoperOpen(true)
          }
          className="collection__popupButton"
        >
          {isPoperOpen ? (
            <CollectionPopupMenuIcon className="collection__popupIcon_active" />
          ) : (
            <CollectionPopupMenuIcon className="collection__popupIcon" />
          )}
          {isPoperOpen ? <CollectionPopper /> : null}
        </div>
      </div>
    </ClickAwayListener>
  );
};
