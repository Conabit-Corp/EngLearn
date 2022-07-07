import "./wordList.components.scss";
import { WordPair } from "../../../proto/conabit/englearn/collection/collection_models_pb";
import { WordItem } from "./wordItem.components";

interface Props {
  words: WordPair.AsObject[] | undefined,
}

export const WordList = (props: Props): JSX.Element => {
  return (
    <div className={`wordList  ${props.words?.length === 0 ? "wordList_noWords" : ""}`}>
      {props.words?.length === 0 ?
        <p className="wordList__noWordsWarning">
          You haven’t added the words yet.<br />
          Add at least <strong>5 words</strong> to start exercises
        </p>
        :
        <>
          <span className="wordList__wordsCount">words: {props.words?.length}</span>
          {
            props.words?.map(word => {
              return (
                <WordItem key={word.id} word={word} />
              )
            })
          }
        </>
      }
    </div>
  )
}
