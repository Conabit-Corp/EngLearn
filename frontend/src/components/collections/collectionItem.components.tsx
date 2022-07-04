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
  setBlockScroll: any;
}

export const CollectionItem = (props: Props): JSX.Element => {
  const [isPoperOpen, setIsPoperOpen] = useState(false);

  props.setBlockScroll(isPoperOpen);

  const handleClickAway = () => {
    setIsPoperOpen(false);
  };

  // if (isPoperOpen) {
  //   window.addEventListener("scroll", (e) => {
  //     window.scrollTo(0, 0);
  //   });
  // }

  return (
    <div className="collection">
      <div className="collection__info">
        <div className="collection__title">{props.collectionName}</div>
        <div className="collection__description">
          {props.collectionDescription}
        </div>
      </div>
      <ClickAwayListener onClickAway={handleClickAway}>
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
        </div>
      </ClickAwayListener>
      {isPoperOpen ? <CollectionPopper /> : null}
    </div>
  );
};
