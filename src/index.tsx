import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import {BrowserRouter} from "react-router-dom";
import {CssBaseline} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Create a custom theme
const theme = createTheme({
    palette: {
        background: {
            default: 'black', // Set your background color
        },
    },
});

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <ThemeProvider theme={theme}>
              <CssBaseline/>
              <App />
          </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
