import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserHistory } from 'react-router';
import './index.css';
import Root from './routes'
import BrowserRouter from "react-router-dom/BrowserRouter";


const font = "'Keep Calm', Arial Bold";

render(
  <BrowserRouter>
  <Provider store={store} >
      <Root />

  </Provider>
  </BrowserRouter>,
  document.getElementById("app")
);
