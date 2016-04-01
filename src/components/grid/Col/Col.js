import React, { PropTypes } from 'react';
import styles from './Col.scss';

const Col = ({ children, size, ...props }) => (
  <div
    className={styles[`column-${size}`]}
    {...props}
  >
    {children}
  </div>
);


Col.defaultProps = {
  size: '12',
};

Col.propTypes = {
  children: PropTypes.any,
  size: PropTypes.number,
};

export default Col;
