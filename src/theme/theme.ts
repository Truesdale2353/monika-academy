
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
        },
      },
    }}
});

export default theme;