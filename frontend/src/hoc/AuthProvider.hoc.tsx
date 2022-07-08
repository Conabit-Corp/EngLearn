import { createContext } from "react";
import { signInRequest, logOutRequest } from "../apiGRPC/authService";
import { TODO_ANY } from "../TODO_ANY";
import { CustomSnackbar } from "../components/customSnackbar/customSnackbar.components";
import { AlertDialog } from "../components/confirmAlert/confirmAlert.components";

export const AuthContext = createContext(null);

interface Props {
  children: React.ReactElement | JSX.Element | null,
}

export const AuthProvider = (props: Props): JSX.Element => {

  const signIn = (login: string, password: string, cb: () => void) => {
    signInRequest(login, password, cb)
  }

  const signOut = (cb: () => void) => {
    logOutRequest(cb)
  }

  const value: TODO_ANY = { signIn, signOut };

  return (
    <AuthContext.Provider value={value}>
      {props.children}
      <AlertDialog />
      <CustomSnackbar />
    </AuthContext.Provider>
  )
}
