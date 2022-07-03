import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WordCollection } from "../../../proto/conabit/englearn/collection/collection_models_pb";
import { getCollectionByIdRequest } from "../../apiGRPC/collectionService";

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
    <div>
      Collection id: {id}
    </div>
  )
}
