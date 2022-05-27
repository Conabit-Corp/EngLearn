import React from "react";
import { Navigate } from "react-router-dom";
import { RegForm } from "../../components/regPage/form.components";

export const RegPage = (): JSX.Element | null => {
  if (localStorage.getItem('token') === null) {
    return <RegForm />
  } else {
    return <Navigate to={'/'} />
  }

};
