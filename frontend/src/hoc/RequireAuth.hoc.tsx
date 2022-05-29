import { useLocation, Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element,
}

export const RequireAuth = (props: Props) => {
  const location = useLocation();

  if (localStorage.getItem('token') === null) {
    return <Navigate to='/login' state={{ from: location }} />
  }

  return props.children;
}
