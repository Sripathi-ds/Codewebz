import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import MainLayout from './layout/MainLayout'
import SignIn from './pages/accounts/SignIn';
import Dashboard from './pages/overview/Dashboard';
import Chat from './pages/management/chat/Chat';
import UserList from './pages/management/users/UserList';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2065d1',
      light: '#078dee14',
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
          '&:hover': {
            boxShadow: 'none',
          }
        },
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
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          padding: 0,
          '&.Mui-expanded': {
            margin: 0
          },
          '&::before': {
            display: 'none'
          }
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          '&,&.Mui-expanded': {
            minHeight: 0,
          },
          '& .MuiAccordionSummary-content.Mui-expanded': {
            margin: '12px 0px'
          }
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: '8px',
          borderRadius: '4px',
          gap: '8px',
          '&:hover': {
            backgroundColor: '#078dee14',
            color: '#2065d1'
          }
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 20
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#078dee14',
          color: '#2065d1',
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontSize: 14
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(255, 255, 255)',
          color: ' rgb(33, 43, 54)',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          backgroundImage: 'none',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
          borderRadius: '16px',
          zIndex: 0,
          webkitBoxAlign: 'center',
          padding: '16px',
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
            <Route path='/chat' index={true} element={<Chat />}></Route>
            <Route path='/users' index={true} element={<UserList />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </>


  );
}

export default App