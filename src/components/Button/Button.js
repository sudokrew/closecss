import React, { PropTypes } from 'react';
import styles from './Button.scss';

const Button = ({ children, href, type, ...props }) => {
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      className={styles[type]}
      href={href}
      {...props}
    >
      {children}
    </Tag>
  );
};

Button.defaultProps = {
};

Button.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;
