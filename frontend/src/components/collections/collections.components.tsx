import { CollectionItem } from "../../components/collections/collectionItem.components";
import { WithoutCollections } from "../../components/collections/withoutCollections.components";
import {
  getWordsCollections,
  CollectionOverviewsResponse,
} from "../../apiGRPC/collectionService";
import { useState, useEffect } from "react";
import "./collections.components.scss";
import { AddCollectionIcon } from "../../images/collections/addCollectionIcon";
import { Link } from "react-router-dom";

export const Collections = (): JSX.Element => {
  const [collections, setCollections] = useState<CollectionOverviewsResponse>();

  useEffect(() => {
    getWordsCollections(setCollections);
  });

  return (
    <div
      className={
        collections?.collections.collectionsList.length !== 0
          ? "collectionsComponent"
          : "collectionsComponent_empty"
      }
    >
      {collections?.collections.collectionsList.length !== 0 ? (
        <div className="collectionsContainer">
          <div className="collectionsList">
            {collections?.collections.collectionsList.map(
              (collection: {
                collectionName: string;
                collectionDescription: string;
                collectionId: string;
              }) => {
                return (
                  <Link
                    key={collection.collectionId}
                    to={`/collections/${collection.collectionId}`}
                  >
                    <CollectionItem
                      collectionId={collection.collectionId}
                      collectionName={collection.collectionName}
                      collectionDescription={collection.collectionDescription}
                    />
                  </Link>
                );
              }
            )}
          </div>

          <Link
            to="createCollection"
            className={
              collections?.collections.collectionsList.length! < 6
                ? "addCollection"
                : "addCollection addCollection_long"
            }
          >
            <div className="addCollection__circle_outserquare">
              <div className="addCollection__circle">
                <AddCollectionIcon className="addCollection__plusIcon_large" />
                <AddCollectionIcon
                  className="addCollection__plusIcon_little"
                  height={14}
                  width={14}
                />
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <WithoutCollections />
      )}
    </div>
  );
};
