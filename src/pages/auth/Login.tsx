import { Box, Button, Container, Stack, Typography } from '@mui/material';
import useCustomStyles from './useStyles';
import loginBanners from '../../assets/banners/LoginBanner.jpg';

export default function Login() {
  const { loginSX } = useCustomStyles();

  const handleGitHubLogin = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const redirectUri = 'http://localhost:5173/'; // Replace with your redirect URI
    const scope = 'repo'; // Add scopes as needed
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
    window.location.href = githubAuthUrl;
  };

  return (
    <Container
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack
        gap={4}
        alignItems="center"
        justifyContent="center"
        sx={loginSX.form}
        flexDirection={'row'}
      >
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <img
            src={loginBanners} // Replace with your image URL
            alt="Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Stack sx={{ pr: 4, maxWidth: '300px' }} gap={2}>
          <Typography variant="h2" sx={[loginSX.title]}>
            Welcome to Effluo
          </Typography>
          <Typography variant="body1" sx={loginSX.black}>
            Context-aware Solution for Streamlined CI/CD in Software Development
            and Operations
          </Typography>
          <Button
            variant="contained"
            onClick={handleGitHubLogin}
            sx={{ mt: 2 }}
          >
            Login with GitHub
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
