import { Link } from "react-router-dom";
import "./withoutCollections.components.scss";

export const WithoutCollections = () => {
  return (
    <div className="noCollectionsMessage">
      <div className="noCollectionsMessage__text">
        You have no collections...
      </div>
      <Link className="noCollectionsMessage__link" to="createCollection">
        Add new collection
      </Link>
    </div>
  );
};
