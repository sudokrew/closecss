import React, { PropTypes } from 'react';
import styles from './Row.scss';

const Row = ({ children, ...props }) => (
  <div
    className={styles.row}
    {...props}
  >
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.any,
};

export default Row;
