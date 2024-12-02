import Box from '@mui/material/Box';
import Lottie from 'lottie-react';
import rocket from '../../assets/animations/PageLoading.json';
import { Typography, useTheme } from '@mui/material';

interface Props {
  loadingText?: string;
  minHeight?: string;
  removebg?: boolean;
}

const PageLoadingAnimation = ({ loadingText, minHeight, removebg }: Props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: minHeight || '90vh',
        height: minHeight || 'auto',
        backgroundColor: removebg
          ? 'transparent'
          : theme.palette.secondary.lightest,
        flexDirection: 'column',
      }}
    >
      <Lottie animationData={rocket} loop={true} style={{ width: '15vw' }} />
      {loadingText && (
        <Typography variant="body2" style={{ marginLeft: '1rem' }}>
          {loadingText}...
        </Typography>
      )}
    </Box>
  );
};

export default PageLoadingAnimation;
