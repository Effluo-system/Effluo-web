import { Button, Container, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CONSOLE, ROOT } from '../../../routes/routes.json';
import { triggerReviewerAlgorithm } from '../../../services/consoleService';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import useSnackbar from '../components/SnackBar/useSnackbar';

const ConsoleOverview = () => {
  const navigate = useNavigate();
  const showSnackbar = useSnackbar();
  const token = useSelector((state: RootState) => state.auth.token)!;

  return (
    <Container sx={{ height: '90vh' }}>
      <Stack pt={5}>
        <Stack gap={5} mb={5}>
          <Typography variant="h2">Console Overview</Typography>
          <Button
            variant="contained"
            onClick={async () => {
              const result = await triggerReviewerAlgorithm(token);
              if (result) {
                result.Success
                  ? showSnackbar('Algorithm triggered successfully')
                  : showSnackbar('Error triggering algorithm' + result.Error);
              }
            }}
          >
            Trigger Reviewer Assignment Algorithm
          </Button>
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
