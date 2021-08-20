import React from 'react';
import styles from './site-menu.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Buttons = ['Услуги','Рассчитать кредит', 'Конвертер валют', 'Контакты'];

function SiteMenu({className, menuState}) {
  const listClass = cn(
    styles.list,
    className,
    {[styles.menu_open]: menuState},
  );

  return (
    <ul className={listClass}>
      {
        Buttons.map((button) => (
          <li className={styles.item} key={button}>
            <a className={styles.link} href="/#">{button}</a>
          </li>
        ))
      }
    </ul>
  );
}

SiteMenu.defaultProps = {
  menuState: false,
  className: '',
};

SiteMenu.propTypes = {
  menuState: PropTypes.bool,
  className: PropTypes.string,
};

export default SiteMenu;

