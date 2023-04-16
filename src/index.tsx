import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Router from './Router';
import rootReducer from './modules';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const root = createRoot(document.getElementById('root') as HTMLElement);

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  </ThemeProvider>
);
