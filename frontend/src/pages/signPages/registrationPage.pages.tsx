import { Navigate } from "react-router-dom";
import { SignForm } from "../../components/signPages/form.components";

export const RegPage = (): JSX.Element | null => {
  if (localStorage.getItem('token') === null) {
    return <SignForm page={'signUp'} title={'Create Account'} buttonContent={'Sign up'} />
  } else {
    return <Navigate to={'/'} />
  }
};
