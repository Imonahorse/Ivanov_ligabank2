import React, {useEffect, useState} from 'react';
import Tabs from '../tabs/tabs';
import Slider from '../slider/slider';
import styles from '../slide/slide.module.scss';

const tabs = {
  vault: 'Вклады',
  cards: 'Кредиты',
  security: 'Страхование',
  phone: 'Онлайн-сервисы',
};

const slides = [
  {
    slide: tabs.vault,
    title: 'Вклады Лига Банка – это выгодная инвестиция в свое будущее',
    features: [
      'Проценты по вкладам до 7%',
      'Разнообразные условия',
      'Возможность ежемесячной капитализации или вывод процентов на банковскую карту',
    ],
    additionalText: '',
    withButton: true,
  },
  {
    slide: tabs.cards,
    title: 'Лига Банк выдает кредиты под любые цели',
    features: [
      'Ипотечный кредит',
      'Автокредит',
      'Потребительский кредит',
    ],
    additionalText: 'Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись нашим кредитным калькулятором',
    withButton: false,
  },
  {
    slide: tabs.security,
    title: 'Лига Страхование — застрахуем все что захотите',
    features: [
      'Автомобильное страхование',
      'Страхование жизни и здоровья',
      'Страхование недвижимости',
    ],
    additionalText: '',
    withButton: true,
  },
  {
    slide: tabs.phone,
    title: 'Лига Банк — это огромное количество онлайн-сервисов для вашего удобства',
    features: [
      'Мобильный банк, который всегда под рукой',
      'Приложение Лига-проездной позволит вам оплачивать билеты по всему миру',
    ],
    additionalText: '',
    withButton: true,
  },
];

function Test() {
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1023);

  useEffect(() => {
    const checkWindowSize = () => {
      const tablet = window.innerWidth < 1023;
      if (isTablet !== tablet) {
        setIsTablet(window.innerWidth < 1023);
      }
    };

    window.addEventListener('resize', checkWindowSize);

    return (() => window.removeEventListener('resize', checkWindowSize));
  }, [isTablet]);

  return (
    <section className={styles.services}>
      <h2 className='visually-hidden'>Услуги</h2>
      {!isTablet && <Tabs tabs={tabs} slides={slides}/>}
      {isTablet && <Slider slides={slides}/>}
    </section>
  );
}

export default Test;

