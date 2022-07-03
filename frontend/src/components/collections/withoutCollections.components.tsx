import "./withoutCollections.components.scss";

export const WithoutCollections = () => {
  return (
    <div className="noCollectionsMessage">
      <div className="noCollectionsMessage__text">
        You have no collections...
      </div>
      <div className="noCollectionsMessage__link">Add new collection</div>
    </div>
  );
};
