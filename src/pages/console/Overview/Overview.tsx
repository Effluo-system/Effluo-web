import { Button, Container, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CONSOLE, ROOT } from '../../../routes/routes.json';

const ConsoleOverview = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ height: '90vh' }}>
      <Stack pt={5}>
        <Stack gap={5} mb={5}>
          <Typography variant="h2">Console Overview</Typography>
          <Button variant="contained">Trigger Reviewer Assignment Flow</Button>
        </Stack>

        <Stack>
          <Button
            variant="outlined"
            onClick={() =>
              navigate(
                `${ROOT.route}${CONSOLE.route}/${CONSOLE.subroutes.REPOSITORIES}`
              )
            }
          >
            Repositories
          </Button>
          <Button
            onClick={() =>
              navigate(
                `${ROOT.route}${CONSOLE.route}/${CONSOLE.subroutes.PULL_REQUESTS}`
              )
            }
            variant="outlined"
          >
            Pull Requests
          </Button>
          <Button
            variant="outlined"
            onClick={() =>
              navigate(
                `${ROOT.route}${CONSOLE.route}/${CONSOLE.subroutes.REVIEWS}`
              )
            }
          >
            Reviews
          </Button>
          <Button
            variant="outlined"
            onClick={() =>
              navigate(
                `${ROOT.route}${CONSOLE.route}/${CONSOLE.subroutes.ISSUES}`
              )
            }
          >
            Issues
          </Button>
          <Button
            variant="outlined"
            onClick={() =>
              navigate(
                `${ROOT.route}${CONSOLE.route}/${CONSOLE.subroutes.REVIEWER_SUMMARY}`
              )
            }
          >
            Reviewer Summary
          </Button>
          <Button
            variant="outlined"
            onClick={() =>
              navigate(
                `${ROOT.route}${CONSOLE.route}/${CONSOLE.subroutes.WORKLOAD}`
              )
            }
          >
            Workload
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ConsoleOverview;
