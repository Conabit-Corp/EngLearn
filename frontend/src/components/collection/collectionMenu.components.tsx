import "./collectionMenu.components.scss";
import { AngleDownIcon } from "../../images/collections/angleDownIcon";
import { useState } from "react";

export const CollectionMenu = () => {
  const [moreInfoOpened, setMoreInfoOpened] = useState(false);
  const [addWordOpened, setAddWordOpened] = useState(false);
  const [statisticsOpened, setStatisticsOpened] = useState(false);

  return (
    <div className="collectionMenu">
      <div
        className="collectionMenu__item"
        onClick={() => setMoreInfoOpened(prevState => prevState === false ? true : false)}
      >
        <div className="collectionMenu__itemHead">
          <AngleDownIcon className={moreInfoOpened === true ? "collectionMenu__itemIcon_inverted" : ''} />
          <span className="collectionMenu__itemTitle">More info</span>
        </div>
        <div
          className={`collectionMenu__itemContent ${moreInfoOpened === false ? "collectionMenu__itemContent_hide" : ""}`}
        >
          BIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST
          BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TESBIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST
          BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TES
        </div>
      </div>
      <div
        className="collectionMenu__item"
        onClick={() => setAddWordOpened(prevState => prevState === false ? true : false)}
      >
        <div className="collectionMenu__itemHead">
          <AngleDownIcon className={addWordOpened === true ? "collectionMenu__itemIcon_inverted" : ''} />
          <span className="collectionMenu__itemTitle">Add word</span>
        </div>
        <div
          className={`collectionMenu__itemContent ${addWordOpened === false ? "collectionMenu__itemContent_hide" : ""}`}
        >
          BIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST
          BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TESBIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST BIG NAME FOR TEST
          BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TEST BIG DESCRIPTION FOR TES
        </div>
      </div>
      <div
        className="collectionMenu__item"
        onClick={() => setStatisticsOpened(prevState => prevState === false ? true : false)}
      >
        <div className="collectionMenu__itemHead">
          <AngleDownIcon className={statisticsOpened === true ? "collectionMenu__itemIcon_inverted" : ''} />
          <span className="collectionMenu__itemTitle">Statistics</span>
        </div>
        <div
          className={`collectionMenu__itemContent ${statisticsOpened === false ? "collectionMenu__itemContent_hide" : ""}`}
        >
          Statistics
        </div>
      </div>
    </div>
  )
}
