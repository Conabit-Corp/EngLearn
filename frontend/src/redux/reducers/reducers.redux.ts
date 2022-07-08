import { combineReducers } from "redux";
import { snackbarReducer } from "./snackbarReducer.redux";
import { confirmAlertReducer } from "./confirmAlertReducer.redux";

export const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  confirmAlertReducer: confirmAlertReducer,
})

export type RootState = ReturnType<typeof rootReducer>
