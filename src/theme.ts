import { createTheme } from '@mui/material/styles';

// Custom color palette
export const colors = {
  primary: '#007EA7',      // Teal/Cyan Blue
  secondary: '#2F3061',    // Dark Blue/Navy
  dark: '#36311F',         // Dark Brown
  lightCyan: '#81F0E5',    // Light Cyan/Aqua
  brightCyan: '#42F2F7',   // Bright Cyan
};

// Create Material-UI theme with custom colors
const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      light: colors.lightCyan,
      dark: colors.secondary,
    },
    secondary: {
      main: colors.brightCyan,
      dark: colors.dark,
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
