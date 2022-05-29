import { createContext } from "react";
import { signInRequest } from "../apiGRPC/authService";
import { logOutRequest } from "../apiGRPC/authService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }: { children: React.ReactElement | null }) => {

  const signIn = (login: string, password: string, cb: () => void) => {
    signInRequest(login, password, cb)
  }

  const signOut = (cb: () => void) => {
    logOutRequest(cb)
  }

  const value: any = { signIn, signOut };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}