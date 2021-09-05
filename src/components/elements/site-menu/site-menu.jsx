import React from 'react';
import styles from './site-menu.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Buttons = ['Услуги','Рассчитать кредит', 'Конвертер валют', 'Контакты'];
const footerButtons = ['Услуги', 'Рассчитать кредит', 'Контакты', 'Задать вопрос'];

function SiteMenu({className, menuState, isFooter}) {
  const listClass = cn(
    styles.list,
    className,
    {[styles.list__footer]: isFooter},
    {[styles.menu_open]: menuState},
  );
  const itemClass = cn(
    styles.item,
    {[styles.item__footer]: isFooter},
  );
  const buttons = isFooter ? footerButtons : Buttons;

  return (
    <ul className={listClass}>
      {
        buttons.map((button) => (
          <li className={itemClass} key={button}>
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
  isFooter: false,
};

SiteMenu.propTypes = {
  menuState: PropTypes.bool,
  className: PropTypes.string,
  isFooter: PropTypes.bool,
};

export default SiteMenu;

