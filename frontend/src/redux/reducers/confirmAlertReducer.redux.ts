import { OPEN_CONFIRMALERT, CLOSE_CONFIRMALERT } from "../actionTypes.redux";
import { ConfirmAlertAction, ConfirmAlertState } from "../types/confirmAlertTypes.redux";

const initialState: ConfirmAlertState = {
  open: false,
  title: '',
  description: '',
  disagreeButtonText: '',
  agreeButtonText: '',
  agreeFunction: undefined,
  vlaueAgreeFunction: '',
}

export const confirmAlertReducer = (state = initialState, action: ConfirmAlertAction) => {
  switch (action.type) {
    case OPEN_CONFIRMALERT:
      return {
        open: true,
        title: action.title,
        description: action.description,
        disagreeButtonText: action.disagreeButtonText,
        agreeButtonText: action.agreeButtonText,
        agreeFunction: action.agreeFunction,
        vlaueAgreeFunction: action.vlaueAgreeFunction
      }
    case CLOSE_CONFIRMALERT:
      return {
        open: false,
        title: action.title,
        description: action.description,
        disagreeButtonText: action.disagreeButtonText,
        agreeButtonText: action.agreeButtonText,
        agreeFunction: undefined,
        vlaueAgreeFunction: '',
      }
    default:
      return state;
  }
}
