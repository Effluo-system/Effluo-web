import { Route, Routes } from 'react-router-dom';
import { ROOT, LOGIN, CONSOLE } from './routes.json';
import AuthWrapper from './AuthWrapper';
import Login from '../pages/auth/Login';
import Home from '../pages/home/Home';
import ConsoleOverview from '../pages/console/Overview/Overview';
import PullRequests from '../pages/console/PullRequests/PullRequests';
import Repositories from '../pages/console/Repositories/Repositories';
import Reviews from '../pages/console/Reviews/Reviews';
import Issues from '../pages/console/Issues/Issues';
import ReviewerSummary from '../pages/console/ReviewerSummary/ReviewerSummary';
import Workload from '../pages/console/Workload/Workload';

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
          <Route path={`${CONSOLE.subroutes.REVIEWS}`} element={<Reviews />} />
          <Route path={`${CONSOLE.subroutes.ISSUES}`} element={<Issues />} />
          <Route
            path={`${CONSOLE.subroutes.REVIEWER_SUMMARY}`}
            element={<ReviewerSummary />}
          />
          <Route
            path={`${CONSOLE.subroutes.WORKLOAD}`}
            element={<Workload />}
          />
        </Route>
      </Route>
      {/* TODO: Add a 404 page */}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}
