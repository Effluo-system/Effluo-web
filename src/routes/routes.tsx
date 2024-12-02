import { Route, Routes } from 'react-router-dom';
import { ROOT, LOGIN, CONSOLE } from './routes.json';
import AuthWrapper from './AuthWrapper';
import Login from '../pages/auth/Login';
import Home from '../pages/home/Home';
import ConsoleOverview from '../pages/console/Overview/Overview';
import PullRequests from '../pages/console/PullRequests/PullRequests';
import Repositories from '../pages/console/Repositories/Repositories';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROOT.route} element={<AuthWrapper />}>
        <Route path={ROOT.route} element={<Home />} />
        <Route path={LOGIN.route} element={<Login />} />
        <Route path={CONSOLE.route}>
          <Route path={''} element={<ConsoleOverview />} />
          <Route
            path={`${CONSOLE.subroutes.PULL_REQUESTS}`}
            element={<PullRequests />}
          />
          <Route
            path={`${CONSOLE.subroutes.REPOSITORIES}`}
            element={<Repositories />}
          />
        </Route>
      </Route>
      {/* TODO: Add a 404 page */}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}
