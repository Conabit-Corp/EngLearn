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

  const [blockScroll, setBlockScroll] = useState(true);

  useEffect(() => {
    getWordsCollections(setCollections);
  }, []);

  return (
    <div
      className={
        blockScroll
          ? "collectionsContainer_scrollBlock"
          : "collectionsContainer"
      }
    >
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
                  setBlockScroll={setBlockScroll}
                  key={collection.collectionId}
                  collectionId={collection.collectionId}
                  collectionName={collection.collectionName}
                  collectionDescription={collection.collectionDescription}
                />
              );
            }
          )}
          <Link to="createCollection">
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
          </Link>
        </div>
      ) : (
        <WithoutCollections />
      )}
    </div>
  );
};
