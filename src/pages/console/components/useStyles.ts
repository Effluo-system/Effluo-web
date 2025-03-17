import { useTheme } from '@mui/material';

const useCustomStyles = () => {
  const theme = useTheme();

  const alertSX = {
    box: {
      border: `8px solid ${theme.palette.primary.main}`,
      borderRadius: 2,
      padding: 5,
      background: theme.palette.common.white,
    },
    text: {
      color: theme.palette.primary.main,
    },
  };

  return { alertSX };
};

export default useCustomStyles;
