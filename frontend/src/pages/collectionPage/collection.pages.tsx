import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./collection.pages.scss";
import { WordCollection } from "../../../proto/conabit/englearn/collection/collection_models_pb";
import { getCollectionByIdRequest } from "../../apiGRPC/collectionService";
import {
  GoBackButton,
  WordList,
  LearnButton,
  RepeatButton,
  NameCollection,
  CollectionMenu,
} from "../../components/collection/export.collection.components";

export const Collection = (): JSX.Element => {
  const [collection, setCollection] = useState<WordCollection.AsObject>();
  const [words, setWords] = useState(collection?.wordsList!);

  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      getCollectionByIdRequest(id, setCollection, setWords);
      setWords(collection?.wordsList!)
    }
  }, [])

  return (
    <div className="collectionContainer">
      <div className="collectionContainer__main">
        <GoBackButton />
        <WordList words={words} />
        <div className="collectionContainer__buttons">
          <LearnButton />
          <RepeatButton />
        </div>
      </div>
      <div className="collectionContainer__controller">
        <NameCollection title={collection?.name} description={collection?.description} />
        <CollectionMenu words={words} setWords={setWords} collectionId={collection?.id!} />
      </div>
    </div>
  )
}
