import { CollectionItem } from "../../components/collections/collectionItem.components";
import { WithoutCollections } from "../../components/collections/withoutCollections.components";
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
  console.log(collections);

  let collectionsArr: any = [];
  // let collectionsArr = collections?.collections.collectionsList;
  // console.log(collectionsArr);

  return (
    // <div className="12"></div>
    <div className="collectionsContainer">
      {collectionsArr.length !== 0 ? (
        <div className="collectionsList">
          {collectionsArr.map((collection: { collectionName: string }) => {
            return (
              <CollectionItem collectionName={collection.collectionName} />
            );
          })}
        </div>
      ) : (
        <WithoutCollections />
      )}
    </div>
  );
};
