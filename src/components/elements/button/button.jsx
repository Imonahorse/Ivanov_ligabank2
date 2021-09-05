import React from 'react';
import styles from './button.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Button({
  white, children, className, onClick, disabled, ...attrs
}) {
  const buttonClass = cn(
    styles.button,
    {[styles.white]: white},
    className,
  );
  const Tag = attrs.href ? 'a' : 'button';

  return (
    <Tag
      {...attrs}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Tag>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  white: PropTypes.bool,
};

Button.defaultProps = {
  children: 'button',
  white: false,
  className: '',
  onClick: () => {},
  disabled: false,
};

export default Button;
