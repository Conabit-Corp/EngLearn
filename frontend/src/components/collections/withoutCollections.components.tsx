import { Link } from "react-router-dom";
import "./withoutCollections.components.scss";

export const WithoutCollections = () => {
  return (
    <div className="noCollectionsMessage">
      <div className="noCollectionsMessage__text">
        You have no collections...
      </div>
      <Link to="createCollection">
        <div className="noCollectionsMessage__link">Add new collection</div>
      </Link>
    </div>
  );
};
