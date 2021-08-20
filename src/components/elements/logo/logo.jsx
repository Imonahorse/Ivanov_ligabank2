import React from 'react';
import logo from './logo.svg';
import logoMobile from './logo-mobile.svg';
import styles from './logo.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Logo({className, menuState}) {
  const divClass = cn(
    styles.logo,
    className,
    {[styles.menu__open]: menuState},
  );

  return (
    <div className={divClass}>
      <picture>
        <source media='(max-width: 767px)' srcSet={logoMobile}/>
        <img src={logo} alt="Логотип банка"/>
      </picture>
    </div>
  );
}

Logo.propTypes = {
  menuState: PropTypes.bool,
  className: PropTypes.string,
};

Logo.defaultProps = {
  menuState: '',
  className: false,
};

export default Logo;

