import { Navigate } from 'react-router-dom';
import { Form } from '../../components/signPages/loginPage/form.components';

export const LoginPage = (): JSX.Element | null => {

  if (localStorage.getItem('token') === null) {
    return <Form />
  } else {
    return <Navigate to={'/'}></Navigate>
  }

};
