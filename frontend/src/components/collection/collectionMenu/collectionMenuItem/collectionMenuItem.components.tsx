import React, { Children, useState } from "react";
import "./collectionMenuItem.components.scss";
import { AngleDownIcon } from "../../../../images/collections/angleDownIcon";

interface Props {
  children: JSX.Element,
  title: string,
  opened: boolean,
  setOpened: React.Dispatch<React.SetStateAction<boolean>>,
}

export const CollectionMenuItem = (props: Props) => {
  return (
    <div className="collectionMenuItem">
      <div
        className="collectionMenuItem__head"
        onClick={() => props.setOpened(prevState => prevState === false ? true : false)}
      >
        <AngleDownIcon className={props.opened === true ? "collectionMenuItem__Icon_inverted" : ""} />
        <span className="collectionMenuItem__title">{props.title}</span>
      </div>
      <div
        className={`collectionMenuItem__content${props.opened === false ? " collectionMenuItem__content_hide" : ""}`}
      >
        {props.children}
      </div>
    </div>
  )
}
