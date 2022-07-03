import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./collection.pages.scss";
import { WordCollection } from "../../../proto/conabit/englearn/collection/collection_models_pb";
import { getCollectionByIdRequest } from "../../apiGRPC/collectionService";
import { GoBackButton } from "../../components/collection/export.collection.components";

export const Collection = () => {
  const [collection, setCollection] = useState<WordCollection.AsObject>();

  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      getCollectionByIdRequest(id, setCollection);
    }
  }, [])

  console.log(collection?.id);

  return (
    <div className="collectionContainer">
      <GoBackButton />
    </div>
  )
}
