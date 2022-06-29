import { CollectionItem } from "../../components/collections/collectionItem.components";
import {
  getWordsCollections,
  CollectionOverviewsResponse,
} from "../../apiGRPC/collectionService";
import { useState, useEffect } from "react";
import "./collectionsPage.pages.scss";

export const CollectionsPage = (): JSX.Element => {
  const [collections, setCollections] = useState<CollectionOverviewsResponse>();

  useEffect(() => {
    getWordsCollections(setCollections);
  }, []);

  //Вот как из collections нужно теперь доставать массив с коллециями:
  let collectionsArr = collections?.collections.collectionsList;
  console.log(collectionsArr);

  return (
    <div className="collectionsContainer">
      <div className="collectionsList">
        {collectionsArr
          ? collectionsArr.map((collection) => {
              return (
                <CollectionItem collectionName={collection.collectionName} />
              );
            })
          : null}
      </div>
    </div>
  );
};
