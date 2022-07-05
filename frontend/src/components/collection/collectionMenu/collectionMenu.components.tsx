import "./collectionMenu.components.scss";
import { AngleDownIcon } from "../../../images/collections/angleDownIcon";
import { useState } from "react";
import { FormNewWord } from "../../createCollection/addingNewWords/formNewWord.components";
import { WordCollection, WordPair } from "../../../../proto/conabit/englearn/collection/collection_models_pb";

interface Props {
  words: WordPair.AsObject[],
  setWords: React.Dispatch<React.SetStateAction<WordPair.AsObject[]>>,
}

export const CollectionMenu = (props: Props): JSX.Element => {
  const [moreInfoOpened, setMoreInfoOpened] = useState(false);
  const [addWordOpened, setAddWordOpened] = useState(false);
  const [statisticsOpened, setStatisticsOpened] = useState(false);

  return (
    <div className="collectionMenu">
      <div className="collectionMenu__item">
        <div
          className="collectionMenu__itemHead"
          onClick={() => setMoreInfoOpened(prevState => prevState === false ? true : false)}
        >
          <AngleDownIcon className={moreInfoOpened === true ? "collectionMenu__itemIcon_inverted" : ''} />
          <span className="collectionMenu__itemTitle">More info</span>
        </div>
        <div
          className={`collectionMenu__itemContent ${moreInfoOpened === false ? "collectionMenu__itemContent_hide" : ""}`}
        >
          More info
        </div>
      </div>
      <div className="collectionMenu__item">
        <div
          className="collectionMenu__itemHead"
          onClick={() => setAddWordOpened(prevState => prevState === false ? true : false)}
        >
          <AngleDownIcon className={addWordOpened === true ? "collectionMenu__itemIcon_inverted" : ''} />
          <span className="collectionMenu__itemTitle">Add word</span>
        </div>
        <div
          className={`collectionMenu__itemContent ${addWordOpened === false ? "collectionMenu__itemContent_hide" : ""}`}
        >
          <FormNewWord
            column={true}
            words={props.words}
            setWords={props.setWords}
          />
        </div>
      </div>
      <div className="collectionMenu__item">
        <div
          className="collectionMenu__itemHead"
          onClick={() => setStatisticsOpened(prevState => prevState === false ? true : false)}
        >
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
