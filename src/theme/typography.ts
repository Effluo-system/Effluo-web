import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    pLargest: React.CSSProperties;
    pLarge: React.CSSProperties;
    pRegular: React.CSSProperties;
    pSmall: React.CSSProperties;
    pExtraSmall: React.CSSProperties;
    pTiny: React.CSSProperties;
    pCode: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    pLargest?: React.CSSProperties;
    pLarge?: React.CSSProperties;
    pRegular?: React.CSSProperties;
    pSmall?: React.CSSProperties;
    pExtraSmall?: React.CSSProperties;
    pTiny?: React.CSSProperties;
    pCode?: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    pLargest: true;
    pLarge: true;
    pRegular: true;
    pSmall: true;
    pExtraSmall: true;
    pTiny: true;
    pCode: true;
  }
}

export const typographyOpt: TypographyOptions = {
  fontFamily: 'roboto',
  fontSize: 14,
  h1: {
    fontSize: 43,
    fontWeight: 700,
    lineHeight: '56px',
    letterSpacing: 0,
  },

  h2: {
    fontSize: 27,
    fontWeight: 600,
    lineHeight: '36px',
    letterSpacing: 0,
  },
  h3: {
    fontSize: 17,
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: 0,
  },
  h4: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: 0,
  },
  h5: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: 0,
  },
  h6: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '22px',
    letterSpacing: 0,
  },
  button: {
    fontSize: 14,
    lineHeight: '28px',
    textTransform: 'none',
    fontWeight: 400,
    fontStyle: 'none',
    textAlign: 'center',
  },
  pLargest: {
    fontSize: 16,
    lineHeight: '28px',
    textTransform: 'none',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  pLarge: {
    fontSize: 15,
    lineHeight: '26px',
    textTransform: 'none',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  pRegular: {
    fontSize: 14,
    lineHeight: '24px',
    textTransform: 'none',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  pSmall: {
    fontSize: 12,
    lineHeight: '20px',
    textTransform: 'none',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  pExtraSmall: {
    fontSize: 11,
    lineHeight: '14px',
    textTransform: 'none',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  pTiny: {
    fontSize: 9,
    lineHeight: '16px',
    textTransform: 'none',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  pCode: {
    fontSize: 14,
    lineHeight: '16px',
    textTransform: 'none',
    fontWeight: 400,
    fontStyle: 'normal',
    fontFamily: 'DM Mono',
  },
};
