import { styled } from '@mui/material';
import { SnackbarProvider as NotistackSnackbarProvider } from 'notistack';

export const SnackbarProvider = styled(NotistackSnackbarProvider)(() => ({
  backgroundColor: 'transparent',
  padding: 0,
  '&>div': {
    padding: '20px',
    width: '100%',
    display: 'block',
  },
}));
