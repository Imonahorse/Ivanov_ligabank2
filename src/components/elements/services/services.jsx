import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Thumbs, Pagination} from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/thumbs/thumbs.scss';
import styles from './services.module.scss';
import cn from 'classnames';


SwiperCore.use([Navigation, Thumbs, Pagination]);

function Services() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className={styles.services}>
      <h2 className='visually-hidden'>Услуги</h2>
      <div className='container'>
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          className={styles.thumbs}
        >
          <SwiperSlide>
            <div className={cn(styles.tab, styles.tab__vault)}>Вклады</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cn(styles.tab, styles.tab__card)}>Кредиты</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cn(styles.tab, styles.tab__security)}>Страхование</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cn(styles.tab, styles.tab__phone)}>Онлайн-Сервисы</div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          thumbs={{swiper: thumbsSwiper}}
          pagination={{clickable: true}}
          className={styles.pagination}
        >
          <SwiperSlide className={cn(styles.wrapper, styles.wrapper__piggybank)}>
            <div className={styles.info}>
              <h3 className={styles.title}>Вклады Лига Банка – это выгодная инвестиция в свое будущее</h3>
              <ul className={styles.list}>
                <li className={styles.item}>Проценты по вкладам до 7%</li>
                <li className={styles.item}>Разнообразные условия</li>
                <li className={styles.item}>Возможность ежемесячной капитализации или вывод процентов на банковскую карту</li>
              </ul>
              <button type='button' className={styles.button}>Узнать подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cn(styles.wrapper, styles.wrapper__car)}>
            <div className={styles.info}>
              <h3 className={styles.title}>Лига Банк выдает кредиты под любые цели</h3>
              <ul className={styles.list}>
                <li className={styles.item}>Ипотечный кредит</li>
                <li className={styles.item}>Автокредит</li>
                <li className={styles.item}>Потребительский кредит</li>
              </ul>
              <p className={styles.additional}>Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись нашим кредитным калькулятором</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cn(styles.wrapper, styles.wrapper__security)}>
            <div className={styles.info}>
              <h3 className={styles.title}>Лига Страхование — застрахуем все что захотите</h3>
              <ul className={styles.list}>
                <li className={styles.item}>Автомобильное страхование</li>
                <li className={styles.item}>Страхование жизни и здоровья</li>
                <li className={styles.item}>Страхование недвижимости</li>
              </ul>
              <button type='button' className={styles.button}>Узнать подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cn(styles.wrapper, styles.wrapper__phone)}>
            <div className={styles.info}>
              <h3 className={styles.title}>Лига Банк — это огромное количество онлайн-сервисов для вашего удобства</h3>
              <ul className={styles.list}>
                <li className={styles.item}>Мобильный банк,<br /> который всегда под рукой</li>
                <li className={styles.item}>Приложение Лига-проездной позволит вам оплачивать билеты по всему миру</li>
              </ul>
              <button type='button' className={styles.button}>Узнать подробнее</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Services;


