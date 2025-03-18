import { useSnackbar, SnackbarKey } from 'notistack';
import CloseIcon from '../../../../assets/icons/CloseIcon';
import { IconButton } from '@mui/material';

interface SnackbarCloseButtonProps {
  snackbarKey: SnackbarKey;
}

function SnackbarCloseButton(props: SnackbarCloseButtonProps) {
  const { closeSnackbar } = useSnackbar();
  const { snackbarKey } = props;
  return (
    <IconButton
      size="small"
      onClick={() => closeSnackbar(snackbarKey)}
      sx={{
        position: 'absolute',
        right: 4,
        top: 4,
      }}
    >
      <CloseIcon width={12} height={12} stroke="#ffffff" />
    </IconButton>
  );
}

export default SnackbarCloseButton;
