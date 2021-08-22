import React from 'react';
import styles from './trust.module.scss';
import cn from 'classnames';

function Trust() {
  return (
    <div className={styles.background}>
      <div className={cn('container', styles.wrapper)}>
        <div className={styles.info}>
          <h2 className={styles.title}>Лига Банк</h2>
          <p className={styles.text}>Ваша уверенность в завтрашнем дне</p>
        </div>
      </div>
    </div>
  );
}

export default Trust;
