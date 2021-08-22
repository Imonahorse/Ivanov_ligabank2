import React from 'react';
import SwiperCore, {Pagination, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import styles from './intro.module.scss';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/a11y/a11y.scss';
import Credit from '../slides/credit/credit';
import Trust from '../slides/trust/trust';
import Together from '../slides/together/together';

SwiperCore.use([Pagination, A11y, Autoplay]);

function Intro() {
  return (
    <section className={styles.intro}>
      <Swiper
        slidesPerView={1}
        pagination={{clickable: true}}
        // autoplay={{delay: 3000}}
        resistanceRatio={0}
        loop={true}
      >
        <SwiperSlide>
          <Credit/>
        </SwiperSlide>
        <SwiperSlide>
          <Trust/>
        </SwiperSlide>
        <SwiperSlide>
          <Together/>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Intro;
