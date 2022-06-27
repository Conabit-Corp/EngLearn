import "./createCollectionButtons.components.scss";
import { useNavigate } from "react-router-dom";
import { WordObj } from "../../pages/createCollection/createCollection.pages";
import { createCollectionRequest } from "../../apiGRPC/collectionService";

interface Props {
  collectionTitle: string,
  collectionDescription: string,
  words: Array<WordObj>;
}

export const CreateCollectionButtons = (props: Props): JSX.Element => {

  const navigate = useNavigate();

  return (
    <div className="createCollectionButtons">
      <button
        className="createCollectionButtons__button createCollectionButtons__save"
        onClick={() => createCollectionRequest(props.collectionTitle, props.collectionDescription, props.words)}
      >
        Save collection
      </button>
      <button
        onClick={() => navigate(-1)}
        className="createCollectionButtons__button createCollectionButtons__cancel"
      >
        Cancel
      </button>
    </div>
  )
}
