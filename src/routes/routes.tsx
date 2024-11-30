import { Route, Routes } from 'react-router-dom';
import { ROOT, LOGIN, CONSOLE } from './routes.json';
import AuthWrapper from './AuthWrapper';
import Login from '../pages/auth/Login';
import Home from '../pages/home/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROOT.route} element={<AuthWrapper />}>
        <Route path={LOGIN.route} element={<Login />} />
        <Route path={CONSOLE.route} element={<div>Console</div>} />
      </Route>
    </Routes>
  );
}
