import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: { main: '#2A5C82' }, // Trustworthy blue
    error: { main: '#FF6B6B' },    // For warnings/panic
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif', // Modern font
  },
});