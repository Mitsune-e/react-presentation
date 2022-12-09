import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import './styles/global.scss';
import theme from './styles/theme';
import { Router } from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  </HashRouter>
);
