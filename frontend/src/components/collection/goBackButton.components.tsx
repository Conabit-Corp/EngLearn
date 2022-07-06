import "./goBackButton.components.scss";
import { ArrowLeftIcon } from "../../images/collections/arrowLeftIcon";
import { Link } from "react-router-dom";

export const GoBackButton = (): JSX.Element => {
  return (
    <div className="goBackButton">
      <Link to={"/collections"}>
        <ArrowLeftIcon className="goBackButton__icon" />
        <span className="goBackButton__text">Collections</span>
      </Link>
    </div>
  )
}
