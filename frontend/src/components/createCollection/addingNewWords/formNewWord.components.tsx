import "./formNewWord.components.scss";
import { WordObj } from "../../../pages/createCollection/createCollection.pages";
import { useState } from "react";
import { addNewWordChecker } from "../../../utils/collectionService/createCollection/addNewWordChecker.utils";

interface Props {
  words: Array<WordObj>,
  setWords: React.Dispatch<React.SetStateAction<Array<WordObj>>>,
}

export const FormNewWord = (props: Props): JSX.Element => {
  const [firstWord, setFirstWord] = useState('');
  const [secondWord, setSecondWord] = useState('');
  const [idWord, setIdWord] = useState(0);

  function addWord(): void {
    let newWord: WordObj = {
      id: idWord,
      ru: secondWord,
      eng: firstWord,
    };

    let newWordsArray: WordObj[] = JSON.parse(JSON.stringify(props.words));
    newWordsArray.unshift(newWord);

    props.setWords(newWordsArray);
    setIdWord(idWord + 1);
    setFirstWord('');
    setSecondWord('');
  }

  return (
    <div className="formNewWord">
      <input
        type="text"
        placeholder="English word"
        className="formNewWord__input"
        onChange={e => setFirstWord(e.target.value)}
        value={firstWord}
      />
      <input
        type="text"
        placeholder="Russian word"
        className="formNewWord__input"
        onChange={e => setSecondWord(e.target.value)}
        value={secondWord}
      />
      <button
        className="formNewWord__button"
        onClick={() => addNewWordChecker(firstWord, secondWord, addWord)}
      >
        Add word
      </button>
    </div>
  )
}
