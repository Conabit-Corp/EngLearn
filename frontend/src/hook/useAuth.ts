import { useContext } from "react";
import { AuthContext } from "../hoc/AuthProvider.hoc";

export function useAuth() {
  return useContext(AuthContext);
}
