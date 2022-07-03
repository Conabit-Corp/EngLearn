import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./collection.pages.scss";
import { WordCollection } from "../../../proto/conabit/englearn/collection/collection_models_pb";
import { getCollectionByIdRequest } from "../../apiGRPC/collectionService";
import { ArrowLeftIcon } from "../../images/collections/arrowLeftIcon";

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
      <div className="collectionContainer__goBack">
        <Link to={"/collections"}>
          <ArrowLeftIcon className="collectionContainer__goBackIcon" />
          <span className="collectionContainer__goBackText">Collections</span>
        </Link>
      </div>
      Collection id: {id}
    </div>
  )
}
