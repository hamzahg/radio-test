import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './layout.module.scss';
import Figure from '../components/Figure/Figure';
import Player from '../components/Player/Player';

const Layout = () => {
  return (
    <>
      <Helmet>
        <title>Radio test</title>
      </Helmet>
      <main className={`${styles.layout} min-h-screen`}>
        <h1 className={styles.layout__title}>Radio 2000</h1>
        <Figure></Figure>
        <Player></Player>
      </main>
    </>
  );
};

export default Layout;
