import "./goBackButton.components.scss";
import { ArrowLeftIcon } from "../../images/collections/arrowLeftIcon";
import { Link, useNavigate } from "react-router-dom";

export const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="goBackButton">
      <Link to={"/collections"}>
        <ArrowLeftIcon className="goBackButton__icon" />
        <span className="goBackButton__text">Collections</span>
      </Link>
    </div>
  )
}
