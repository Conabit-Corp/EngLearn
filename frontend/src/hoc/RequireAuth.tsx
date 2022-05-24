import { useLocation, Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }: any) => {
  const location = useLocation();

  if (localStorage.getItem('token') === null) {
    return <Navigate to='/login' state={{ from: location }} />
  }

  return children;
}
