import "./createCollection.pages.scss";
import { AboutCollection, AddingNewWords, CreateCollectionButtons } from "../../components/createCollection/export.createCollection.components";
import { useState } from "react";

export type WordObj = {
  id: number,
  eng: string,
  ru: string
}

export const CreateCollection = (): JSX.Element => {
  const [collectionTitle, setCollectionTitle] = useState('');
  const [collectionDescription, setCollectionDescription] = useState('');
  const [words, setWords] = useState<Array<WordObj>>([]);

  return (
    <div className="createCollectionContainer">
      <AboutCollection
        setCollectionTitle={setCollectionTitle}
        setCollectionDescription={setCollectionDescription}
      />
      <AddingNewWords words={words} setWords={setWords} />
      <CreateCollectionButtons
        collectionTitle={collectionTitle}
        collectionDescription={collectionDescription}
        words={words}
      />
    </div>
  )
}
