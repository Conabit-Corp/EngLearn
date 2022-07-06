import { WordPair } from "../../../proto/conabit/englearn/collection/collection_models_pb";
import "./wordItem.components.scss";

interface Props {
  word: WordPair.AsObject,
}

export const WordItem = (props: Props): JSX.Element => {
  return (
    <div className="wordItem">
      <div className="wordItem__wordProgress"></div>
      <span className="wordItem__word">{props.word.word2?.value}</span>
    </div>
  )
}
