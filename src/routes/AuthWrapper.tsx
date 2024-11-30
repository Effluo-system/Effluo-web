import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getUserAccessToken } from '../hooks/useAuthentication';
import { ROOT, LOGIN } from './routes.json';

export default function AuthWrapper() {
  const { pathname } = useLocation();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const authUser = async () => {
      try {
        const authenticated = await getUserAccessToken();
        setIsAuthenticated(!!authenticated);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };
    authUser();
  }, [pathname]);

  if (isLoading) return <div>Loading...</div>;

  // If not authenticated and not on the login page, redirect to login
  if (!isAuthenticated && location.pathname !== `${ROOT.route}${LOGIN.route}`) {
    return <Navigate to={`${ROOT.route}${LOGIN.route}`} replace />;
  }

  // If authenticated and on the login page, redirect to the root
  if (isAuthenticated && location.pathname === `${ROOT.route}${LOGIN.route}`) {
    return <Navigate to={ROOT.route} replace />;
  }

  // Otherwise, render child routes
  return <Outlet />;
}
