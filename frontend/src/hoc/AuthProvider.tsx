import { createContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }: any) => {

  const signIn = (newUser: any, cb: any) => {
    localStorage.setItem('token', newUser);
    cb();
  }

  const signOut = (cb: any) => {
    localStorage.removeItem('token');
    cb();
  }

  const value: any = { signIn, signOut };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
