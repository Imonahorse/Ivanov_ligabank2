import React from 'react';
import styles from './main.module.scss';
import Header from '../../elements/header/header';

function Main() {
  return (
    <body className={styles.wrapper}>
      <Header/>
      <main>
      </main>
    </body>
  );
}

export default Main;

