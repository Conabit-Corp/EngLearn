import { CollectionItem } from "../../components/collections/collectionItem.components";
import { WithoutCollections } from "../../components/collections/withoutCollections.components";
import {
  getWordsCollections,
  CollectionOverviewsResponse,
} from "../../apiGRPC/collectionService";
import { useState, useEffect } from "react";
import "./collections.components.scss";
import { AddCollectionIcon } from "../../images/collections/addCollectionIcon";

export const Collections = (): JSX.Element => {
  const [collections, setCollections] = useState<CollectionOverviewsResponse>();

  useEffect(() => {
    getWordsCollections(setCollections);
  }, []);

  return (
    <div className="collectionsContainer">
      {collections?.collections.collectionsList.length !== 0 ? (
        <div className="collectionsContainer__list">
          {collections?.collections.collectionsList.map(
            (collection: {
              collectionName: string;
              collectionDescription: string;
              collectionId: string;
            }) => {
              return (
                <CollectionItem
                  key={collection.collectionId}
                  collectionId={collection.collectionId}
                  collectionName={collection.collectionName}
                  collectionDescription={collection.collectionDescription}
                />
              );
            }
          )}
          <div className="addCollection">
            <div className="addCollection__circle">
              <AddCollectionIcon className="addCollection__plusIcon_large" />
              <AddCollectionIcon
                className="addCollection__plusIcon_little"
                height={14}
                width={14}
              />
            </div>
          </div>
        </div>
      ) : (
        <WithoutCollections />
      )}
    </div>
  );
};
