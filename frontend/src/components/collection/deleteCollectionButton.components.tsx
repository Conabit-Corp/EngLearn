import "./deleteCollectionButton.components.scss";
import { deleteCollection } from "../../utils/collectionService/deleteCollection.utils";
import { useDispatch } from "react-redux";

interface Props {
  collectionId: string,
}

export const DeleteCollectionButton = (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div
      className="deleteCollectionButton"
      onClick={() => {
        dispatch({
          type: "OPEN_CONFIRMALERT",
          title: "Confirmation",
          description: "Do you really want to delete this collection?",
          disagreeButtonText: "cancel",
          agreeButtonText: "delete",
          agreeFunction: deleteCollection,
          vlaueAgreeFunction: props.collectionId,
        })
      }}
    >
      delete this colletion
    </div>
  )
}
