import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import MainLayout from './layout/MainLayout'
import SignIn from './pages/accounts/SignIn';
import Dashboard from './pages/dashboard/Dashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2065d1',
    },
  },
  typography: {
    // fontSize: 14,
    fontFamily: [
      'Public Sans', 'sans-serif'
    ].join(','),
    body1: {
      fontSize: 14,
      fontWeight: 600
    },
    body2: {
      fontSize: 12,
      fontWeight: 600
    }

  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          boxShadow: 'none',
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& *': {
            fontFamily: 'inherit',
            fontSize: 14
          }
        }
      }
    }
  },

});

const App = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='account/*' element={<MainLayout />} >
            <Route path='signin' element={<SignIn />}></Route>
          </Route>
          <Route element={<HomeLayout />} >
            <Route path='/' index={true} element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </>


  );
}

export default App