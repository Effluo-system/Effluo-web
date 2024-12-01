import { useTheme } from '@mui/material';

const useCustomStyles = () => {
  const theme = useTheme();

  const loginSX = {
    form: {
      borderRadius: '8px',
      py: 4,
      background: theme.palette.common.white,
    },
    black: {
      color: theme.palette.common.black,
    },
    title: {
      fontWeight: 700,
      color: theme.palette.primary.main,
      mb: 2,
    },
    text: {
      color: theme.palette.primary.light,
    },
  };

  return { loginSX };
};

export default useCustomStyles;
