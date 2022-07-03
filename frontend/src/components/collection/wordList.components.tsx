import { WordCollection } from "../../../proto/conabit/englearn/collection/collection_models_pb";
import "./wordList.components.scss";

interface Props {
  collection: WordCollection.AsObject | undefined,
}

export const WordList = (props: Props): JSX.Element => {
  return (
    <div className={`wordList  ${props.collection?.wordsList.length === 0 ? "wordList_noWords" : null}`}>
      {props.collection?.wordsList.length === 0 ?
        <p className="wordList__noWordsWarning">
          You haven’t added the words yet.<br />
          Add at least <strong>5 words</strong> to start exercises
        </p>
        :
        <span className="wordList__wordsCount">words: {props.collection?.wordsList.length}</span>
      }
    </div>
  )
}
