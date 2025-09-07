import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Inter"',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#5F68FF',
          color: '#ffffff',
          fontSize: '1rem',
          letterSpacing: '0.06em',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#4b54cc',
          },
          '&.Mui-focused': {
            boxShadow: '0 0 0 4px rgba(95, 104, 255, 0.25)',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#5F68FF',
          '&.Mui-checked': {
            color: '#5F68FF',
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#5F68FF',
          '&.Mui-checked': {
            color: '#5F68FF',
          },
        },
      },
    },
  },
});

export default theme;