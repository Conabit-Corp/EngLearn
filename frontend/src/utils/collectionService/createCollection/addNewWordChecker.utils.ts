import { useDispatch } from "react-redux";
import { AnyAction, Dispatch } from "redux";

export const addNewWordChecker = (firstword: string, secondWord: string, addWord: Function, dispatch: Dispatch<AnyAction>) => {
  if (firstword.length < 1 || secondWord.length < 1) {
    dispatch({ type: "OPEN_SNACKBAR", text: "Введи слово выблядок", severity: "error" })
  } else {
    addWord();
  }
}
