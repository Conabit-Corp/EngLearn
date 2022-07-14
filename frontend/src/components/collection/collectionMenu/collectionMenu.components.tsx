import "./collectionMenu.components.scss";
import { AngleDownIcon } from "../../../images/collections/angleDownIcon";
import { useState } from "react";
import { FormNewWord } from "../../createCollection/addingNewWords/formNewWord.components";
import { WordPair } from "../../../../proto/conabit/englearn/collection/collection_models_pb";
import { DeleteCollectionButton } from "../deleteCollectionButton.components";

interface Props {
  words: WordPair.AsObject[],
  setWords: React.Dispatch<React.SetStateAction<WordPair.AsObject[]>>,
  collectionId: string,
}

export const CollectionMenu = (props: Props): JSX.Element => {
  const [moreInfoOpened, setMoreInfoOpened] = useState(false);
  const [wordOpened, setWordOpened] = useState(false);
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
          <DeleteCollectionButton collectionId={props.collectionId} />
        </div>
      </div>
      <div className="collectionMenu__item">
        <div
          className="collectionMenu__itemHead"
          onClick={() => setWordOpened(prevState => prevState === false ? true : false)}
        >
          <AngleDownIcon className={wordOpened === true ? "collectionMenu__itemIcon_inverted" : ''} />
          <span className="collectionMenu__itemTitle">Word</span>
        </div>
        <div
          className={`collectionMenu__itemContent ${wordOpened === false ? "collectionMenu__itemContent_hide" : ""}`}
        >
          Word
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
            collectionId={props.collectionId}
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
