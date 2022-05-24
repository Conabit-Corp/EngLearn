import React from "react";
import { Navigate } from 'react-router-dom';
import { Form } from '../../components/loginPage/form.components';

export const LoginPage = () => {

  if (localStorage.getItem('token') === null) {
    return <Form />
  } else {
    return <Navigate to={'/'}></Navigate>
  }

};
