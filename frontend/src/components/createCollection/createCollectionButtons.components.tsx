import "./createCollectionButtons.components.scss";
import { useNavigate } from "react-router-dom";
import { WordObj } from "../../pages/createCollection/createCollection.pages";
import { createCollectionRequest } from "../../apiGRPC/collectionService";
import { saveCollectionChecker } from "../../utils/export.utils";
import { useDispatch } from "react-redux";
import { WordPair } from "../../../proto/conabit/englearn/collection/collection_models_pb";

interface Props {
  collectionTitle: string,
  collectionDescription: string,
  words: Array<WordPair.AsObject>;
}

export const CreateCollectionButtons = (props: Props): JSX.Element => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="createCollectionButtons">
      <button
        className="createCollectionButtons__button createCollectionButtons__save"
        onClick={() => saveCollectionChecker(props.collectionTitle, props.collectionDescription, props.words, navigate, dispatch)}
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
