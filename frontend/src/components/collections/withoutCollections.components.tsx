import "./withoutCollections.components.scss";

export const WithoutCollections = () => {
  return (
    <div className="noCollectionsMessage">
      <div className="noCollectionsText">You have no collections...</div>
      <div className="addCollectionLink">Add new collection</div>
    </div>
  );
};
