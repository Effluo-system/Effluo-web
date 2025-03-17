import { Box, Stack, Typography } from '@mui/material';
import useCustomStyles from './useStyles';
import { AlertProps } from '../../../types/common';

const CustomAlert = ({ message, resourceName }: AlertProps) => {
  const { alertSX } = useCustomStyles();
  return (
    <Stack
      sx={{ height: '80vh' }}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box sx={alertSX.box}>
        <Typography variant="h2" sx={alertSX.text}>
          {message ??
            `Unauthorized. You need to be the repository owner to view
        ${resourceName}`}
        </Typography>
      </Box>
    </Stack>
  );
};

export default CustomAlert;
