import React from 'react';
import SwiperCore, {Pagination, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import styles from './intro.module.scss';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/a11y/a11y.scss';
import cn from 'classnames';
import Button from '../button/button';

SwiperCore.use([Pagination, A11y, Autoplay]);

function Intro() {
  return (
    <section>
      <h2 className='visually-hidden'>Слайдер с информацией</h2>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className={styles.swiper}
        a11y
        pagination={{'clickable': true}}
      >
        <SwiperSlide className={cn(styles.wrapper, styles.wrapper__cards)} tabIndex='0'>
          <div className='container'>
            <div className={styles.info}>
              <h2 className={cn(styles.title, styles.title__first)}>Лига Банк</h2>
              <p className={cn(styles.text, styles.text__first)}>Кредиты на любой случай</p>
              <Button type='button' href='#calculator' className={styles.button} white>Рассчитать кредит</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={cn(styles.wrapper, styles.wrapper__trust)} tabIndex='0'>
          <div className='container'>
            <div className={styles.info}>
              <h2 className={styles.title}>Лига Банк</h2>
              <p className={styles.text}>Ваша уверенность в завтрашнем дне</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={cn(styles.wrapper, styles.wrapper__security)} tabIndex='0'>
          <div className='container'>
            <div className={styles.info}>
              <h2 className={styles.title}>Лига Банк</h2>
              <p className={styles.text}>Всегда рядом</p>
              <Button type='button' href='#address' className={styles.button}>Найти отделение</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Intro;
