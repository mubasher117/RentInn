import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import './index.css';
import Root from './routes'
import BrowserRouter from "react-router-dom/BrowserRouter";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light:'#61f1f7',
      main: '#02bec4',
      dark:'#008d94',
      contrastText:'#FFFFFF'
    },
    secondary: {
      light:'#54b4da',
      main: '#0284a8',
      dark:'#005779',
    },
  },
  typography: {
    "fontFamily":  '"Titillium Web",sans-serif',
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }

});

render(
  
  <BrowserRouter>
  <MuiThemeProvider theme={theme}>
  
    <Provider store={store} >

      <Root />
    </Provider>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("app")
);
