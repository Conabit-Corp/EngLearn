import "./formNewWord.components.scss";
import { WordObj } from "../../../pages/createCollection/createCollection.pages";
import { useState } from "react";
import { addNewWordChecker } from "../../../utils/collectionService/createCollection/addNewWordChecker.utils";
import { useDispatch } from "react-redux";
import { WordCollection, WordPair } from "../../../../proto/conabit/englearn/collection/collection_models_pb";

interface Props {
  column: boolean,
  words: WordPair.AsObject[],
  setWords: React.Dispatch<React.SetStateAction<WordPair.AsObject[]>>,
}

export const FormNewWord = (props: Props): JSX.Element => {
  const [firstWord, setFirstWord] = useState('');
  const [secondWord, setSecondWord] = useState('');
  const [idWord, setIdWord] = useState(0);

  const dispatch = useDispatch();

  function addWord(): void {
    let newWord: WordPair.AsObject = {
      id: idWord.toString(),
      word1: { countryCode: "ru", value: secondWord },
      word2: { countryCode: "en", value: firstWord },
    };

    let newWordsArray: WordPair.AsObject[] = JSON.parse(JSON.stringify(props.words));
    newWordsArray.unshift(newWord);

    props.setWords(newWordsArray);
    // props.setWords(prevState => console.log(typeof prevState))
    setIdWord(idWord + 1);
    setFirstWord('');
    setSecondWord('');
  }

  return (
    <div className={props.column === true ? "formNewWord_column" : "formNewWord"}>
      <input
        type="text"
        placeholder="English word"
        className="formNewWord__input"
        onChange={e => {
          let value = e.target.value;
          value = value.replace(/[^A-Za-z\-\s]/ig, '');
          setFirstWord(value);
        }}
        value={firstWord}
      />
      <input
        type="text"
        placeholder="Russian word"
        className="formNewWord__input"
        onChange={e => {
          let value = e.target.value;
          value = value.replace(/[^А-ЯЁа-яё\-\s]*/ig, '');
          setSecondWord(value);
        }}
        value={secondWord}
      />
      <button
        className="formNewWord__button"
        onClick={() => addNewWordChecker(firstWord, secondWord, addWord, dispatch)}
      >
        Add word
      </button>
    </div>
  )
}
