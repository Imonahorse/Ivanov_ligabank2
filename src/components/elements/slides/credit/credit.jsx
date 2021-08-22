import React from 'react';
import styles from './credit.module.scss';
import whiteCardTablet from './white-card-tablet.png';
import whiteCardDesktop from './white-card-desktop.png';
import blackCardMobile from './black-card-mobile.png';
import blackCardTablet from './black-card-tablet.png';
import blackCardDesktop from './black-card-desktop.png';

function Credit() {
  return (
    <div className={styles.background}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h2 className={styles.title}>Лига Банк</h2>
            <p className={styles.text}>Кредиты на любой случай</p>
            <button type='button' className={styles.button}>Рассчитать кредит</button>
          </div>
          <div className={styles.product}>
            <picture>
              <source media='(max-width:1023px)' srcSet={whiteCardTablet}/>
              <img className={styles.white_card} src={whiteCardDesktop} width='289' height='182' alt='Кредитная карта'/>
            </picture>
            <picture>
              <source media='(max-width:767px)' srcSet={blackCardMobile}/>
              <source media='(max-width:1023px)' srcSet={blackCardTablet}/>
              <img className={styles.black_card} src={blackCardDesktop} width='289' height='182' alt='Кредитная карта'/>
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credit;
