import React from 'react';
import styles from './together.module.scss';
import cn from 'classnames';

function Together() {
  return (
    <div className={styles.background}>
      <div className={cn('container', styles.wrapper)}>
        <div className={styles.info}>
          <h2 className={styles.title}>Лига Банк</h2>
          <p className={styles.text}>Ваша уверенность в завтрашнем дне</p>
          <button type='button' className={styles.button}>Рассчитать кредит</button>
        </div>
      </div>
    </div>
  );
}

export default Together;
