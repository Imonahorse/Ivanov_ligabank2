import React from 'react';
import styles from './main.module.scss';
import Header from '../../elements/header/header';
import Intro from '../../elements/intro/intro';

function Main() {
  return (
    <body className={styles.wrapper}>
      <Header/>
      <main>
        <h1 className='visually-hidden'>Лига Банк</h1>
        <Intro/>
      </main>
    </body>
  );
}

export default Main;

