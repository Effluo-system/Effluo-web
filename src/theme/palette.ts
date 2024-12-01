import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string;
    lighter?: string;
    lightest?: string;
    shadow?: string;
    border?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
    lighter?: string;
    lightest?: string;
    shadow?: string;
    border?: string;
  }

  // This is to use if we are to create a totally a new
  //  interface Palette {
  //    neutral: Palette["primary"];
  //  }
  //  interface PaletteOptions {
  //    neutral: PaletteOptions["primary"];
  //  }
}

export const lightModePalette: PaletteOptions = {
  common: {
    white: '#FFF',
    black: '#000',
  },
  secondary: {
    darker: '#11172C',
    dark: '#424B66',
    main: '#878B9E',
    light: '#C9CCD9',
    lighter: '#E2E4EB',
    lightest: '#F7F8FE',
    contrastText: '#fff',
    shadow: '#101820',
    border: '#E4E5EC',
  },
  primary: {
    darker: '#130471',
    dark: '#312BA7',
    main: '#726CFA',
    light: '#7E7AFB',
    lighter: '#B9DFFB',
    lightest: '#E8F4FE',
    contrastText: '#fff',
  },
  warning: {
    dark: '#FA8C2F',
    main: '#FFAD4E',
    light: '#FEEFE1',
    lighter: '#FFF6EB',
    contrastText: '#fff',
  },
  success: {
    dark: '#027E72',
    main: '#16A085',
    light: '#C5F3EA',
    lighter: '#EDFFFD',
    lightest: '#BDE9D3',
    contrastText: '#fff',
  },
  error: {
    dark: '#EC2C1D',
    main: '#F34C37',
    light: '#FCEDED',
    lighter: '#F8C2C2',
    contrastText: '#fff',
  },
  action: {
    selected: '#FF0000',
  },
};
