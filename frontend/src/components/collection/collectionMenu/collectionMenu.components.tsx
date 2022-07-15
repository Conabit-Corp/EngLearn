import { useState } from "react";
import "./collectionMenu.components.scss";
import { WordPair } from "../../../../proto/conabit/englearn/collection/collection_models_pb";
import { CollectionMenuItem } from "./collectionMenuItem/collectionMenuItem.components";
import { FormNewWord } from "../../createCollection/addingNewWords/formNewWord.components";
import { DeleteCollectionButton } from "../deleteCollectionButton.components";
import { Word } from "./word/word.components";

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
      <CollectionMenuItem
        title={"More info"}
        opened={moreInfoOpened}
        setOpened={setMoreInfoOpened}
      >
        <DeleteCollectionButton collectionId={props.collectionId} />
      </CollectionMenuItem>

      <CollectionMenuItem
        title={"Word"}
        opened={wordOpened}
        setOpened={setWordOpened}
      >
        <Word />
      </CollectionMenuItem>

      <CollectionMenuItem
        title={"Add word"}
        opened={addWordOpened}
        setOpened={setAddWordOpened}
      >
        <FormNewWord
          column={true}
          words={props.words}
          setWords={props.setWords}
          collectionId={props.collectionId}
        />
      </CollectionMenuItem>

      <CollectionMenuItem
        title={"Statistics"}
        opened={statisticsOpened}
        setOpened={setStatisticsOpened}
      >
        <div>Statistics</div>
      </CollectionMenuItem>
    </div>
  )
}
