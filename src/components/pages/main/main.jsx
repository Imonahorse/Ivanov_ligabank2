import React from 'react';
import styles from './main.module.scss';
import Header from '../../elements/header/header';
import Intro from '../../elements/intro/intro';
import Services from '../../elements/services/services';
import YandexMap from '../../elements/yandex-map/yandex-map';
import Footer from '../../elements/footer/footer';

function Main() {
  return (
    <body className={styles.wrapper}>
      <Header/>
      <main>
        <Intro/>
        <Services/>
        <YandexMap/>
      </main>
      {/*<Footer/>*/}
    </body>
  );
}

export default Main;

