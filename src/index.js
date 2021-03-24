import React from 'react';
import ReactDOM from 'react-dom';
import './static/styles/styles.scss';
import StoreProvider from './app/utils/Store';
import Layout from './app/Layout/Layout';

ReactDOM.render(
  <StoreProvider>
    <Layout />
  </StoreProvider>,
  document.getElementById('root')
);

