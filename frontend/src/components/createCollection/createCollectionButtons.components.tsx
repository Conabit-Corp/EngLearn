import "./createCollectionButtons.components.scss";
import { useNavigate } from "react-router-dom";

export const CreateCollectionButtons = (): JSX.Element => {

  const navigate = useNavigate();

  return (
    <div className="createCollectionButtons">
      <button className="createCollectionButtons__button createCollectionButtons__save">Save collection</button>
      <button
        onClick={() => navigate(-1)}
        className="createCollectionButtons__button createCollectionButtons__cancel"
      >
        Cancel
      </button>
    </div>
  )
}
