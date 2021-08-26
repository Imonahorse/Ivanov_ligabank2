import React from 'react';
import SwiperCore, {Pagination, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import styles from './intro.module.scss';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/a11y/a11y.scss';
import cn from 'classnames';

SwiperCore.use([Pagination, A11y, Autoplay]);

function Intro() {
  return (
    <Swiper
      ally
      slidesPerView={1}
      pagination={{
        'clickable': true,
      }}
      // autoplay={{delay: 3000}}
      loop={false}
    >
      <SwiperSlide className={cn(styles.wrapper, styles.wrapper__cards)}>
        <div className='container'>
          <div className={styles.info}>
            <h2 className={cn(styles.title, styles.title__first)}>Лига Банк</h2>
            <p className={cn(styles.text, styles.text__first)}>Кредиты на любой случай</p>
            <button type='button' className={styles.button}>Рассчитать кредит</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={cn(styles.wrapper, styles.wrapper__trust)}>
        <div className='container'>
          <div className={styles.info}>
            <h2 className={styles.title}>Лига Банк</h2>
            <p className={styles.text}>Ваша уверенность в завтрашнем дне</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={cn(styles.wrapper, styles.wrapper__security)}>
        <div className='container'>
          <div className={styles.info}>
            <h2 className={styles.title}>Лига Банк</h2>
            <p className={styles.text}>Всегда рядом</p>
            <button type='button' className={styles.button}>Рассчитать кредит</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Intro;
