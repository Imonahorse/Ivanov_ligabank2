import React from 'react';
import Header from '../../elements/header/header';
import Intro from '../../elements/intro/intro';
import Services from '../../elements/services/services';
import YandexMap from '../../elements/yandex-map/yandex-map';
import Footer from '../../elements/footer/footer';
import Calculator from '../../elements/calculator/calculator';

function Main() {
  return (
    <>
      <Header/>
      <main>
        <Intro/>
        <Services/>
        <Calculator/>
        <YandexMap/>
      </main>
      <Footer/>
    </>
  );
}

export default Main;

