import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

interface PrivateRouteProps {
  element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const isAuthenticated = useSelector((state: RootState) => !!state.authReducer.accessToken.token);
  return isAuthenticated ? element : <Navigate to="/nonAuthPage" />;
};

export default PrivateRoute;