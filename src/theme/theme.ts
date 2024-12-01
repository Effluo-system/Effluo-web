import { ThemeOptions, createTheme } from '@mui/material';
import { lightModePalette } from './palette';
import { typographyOpt } from './typography';
import { spacing } from './spacing';

const themeOptions: ThemeOptions = createTheme({
  palette: lightModePalette,
  spacing: spacing,
  typography: typographyOpt,
});

export default themeOptions;
