import React, { useState } from 'react'; 
import { ThemeProvider, createTheme , makeStyles } from '@material-ui/core';

import Home from './Home';

const useStyles = makeStyles({
  root: {
  },
});




function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {       
        main: '#f44336',       
      },
      secondary: {        
        main: '#3ea6ff',        
      },
      background: { 
        default:  darkMode ? '#232323' : '#ffff',
        dark:  darkMode ? '#181818' : '#f4f6f8',
        paper:  darkMode ? '#232323' : '#ffff',
      }
    },
  });

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>

  )
  
}

export default App;
