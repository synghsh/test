import { createTheme } from '@mui/material';
import createPalette from '@mui/material/styles/createPalette';
import React from 'react'

const testappTheme = createTheme({
    palette: createPalette({
        mode:"light",
        common:{
            black:"#000",
            white: "#fff"
        },
        primary: {
            main: "#1976d2",
            light:"#42a5f5",
            dark:"#1565c0",
            contrastText:"#fff"
        }

    }),
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1366,
        xl: 1920,
      },
    },
    typography: {
      fontFamily: '"Source Sans Pro", "Poppins"',
    },

  });

export default testappTheme