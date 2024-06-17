// components/ProtectedRoute.tsx
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  authComponent: React.ComponentType;
  nonAuthComponent: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ authComponent: AuthComponent, nonAuthComponent: NonAuthComponent }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return isAuthenticated ? <AuthComponent /> : <NonAuthComponent />;
};

export default ProtectedRoute;
