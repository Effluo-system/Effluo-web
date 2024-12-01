import { useEffect, useState } from 'react';
import { Navigate, Outlet, useSearchParams } from 'react-router-dom';
import { ROOT, LOGIN } from './routes.json';
import { getAccessToken } from '../services/authService';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { setToken } from '../redux/slices/authSlice';
import { getUserAc } from '../redux/slices/userSlice';

export default function AuthWrapper() {
  const [searchparams] = useSearchParams();
  const code = searchparams.get('code');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (code) {
      const fetchToken = async () => {
        try {
          setIsLoading(true);
          const response = await getAccessToken(code);
          if (response.access_token) {
            dispatch(setToken(response.access_token));
            // Remove the `code` parameter from the URL
            const url = new URL(window.location.href);
            url.searchParams.delete('code');
            window.history.replaceState({}, '', url.toString());
          }
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchToken();
    }
  }, []);

  useEffect(() => {
    if (token) {
      const fetchUserDetails = async () => {
        try {
          dispatch(getUserAc(token));
        } catch (error) {
          console.error(error);
        }
      };
      fetchUserDetails();
    }
  }, [token]);

  if (isLoading) return <div>Loading...</div>;

  //   If not authenticated and not on the login page, redirect to login
  if (!token && !code && location.pathname !== `${ROOT.route}${LOGIN.route}`) {
    return <Navigate to={`${ROOT.route}${LOGIN.route}`} replace />;
  }

  // If authenticated and on the login page, redirect to the root
  if (token && location.pathname === `${ROOT.route}${LOGIN.route}`) {
    return <Navigate to={ROOT.route} replace />;
  }

  // Otherwise, render child routes
  return <Outlet />;
}
