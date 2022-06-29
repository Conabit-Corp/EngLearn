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
  console.log(collections?.collections.collectionsList);

  // let collectionsArr: any = [];

  // console.log(collectionsArr);

  return (
    // <div className="12"></div>
    <div className="collectionsContainer">
      {collections?.collections.collectionsList.length !== 0 ? (
        <div className="collectionsList">
          {collections?.collections.collectionsList.map(
            (collection: {
              collectionName: string;
              collectionDescription: string;
            }) => {
              return (
                <CollectionItem
                  collectionName={collection.collectionName}
                  collectionDescription={collection.collectionDescription}
                />
              );
            }
          )}
        </div>
      ) : (
        <WithoutCollections />
      )}
    </div>
  );
};
