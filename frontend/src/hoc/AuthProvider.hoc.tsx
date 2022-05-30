import { createContext } from "react";
import { signInRequest, logOutRequest } from "../apiGRPC/authService";
import { TODO_ANY } from "../TODO_ANY";

export const AuthContext = createContext(null);

interface Props {
  children: React.ReactElement | null,
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
    </AuthContext.Provider>
  )
}
