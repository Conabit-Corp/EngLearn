import { Navigate } from 'react-router-dom';
import { SignForm } from '../../components/signPages/form.components';

export const LoginPage = (): JSX.Element | null => {

  if (localStorage.getItem('token') === null) {
    return <SignForm page={'logIn'} title={'Welcome to EngLearn'} buttonContent={'Log in'} />
  } else {
    return <Navigate to={'/'}></Navigate>
  }

};
