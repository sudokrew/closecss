import React, { PropTypes } from 'react';
import styles from './Col.scss';

const Col = ({ children, size, colWidth, ...props }) => (
  <div
    className={styles[`${size}-${colWidth}`]}
    {...props}
  >
    {children}
  </div>
);


Col.defaultProps = {
  size: 'column',
  colWidth: 12,
};

Col.propTypes = {
  children: PropTypes.any,
  size: PropTypes.string,
  colWidth: PropTypes.number,
};

export default Col;
