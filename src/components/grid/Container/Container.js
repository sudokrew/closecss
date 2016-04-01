import React, { PropTypes } from 'react';
import styles from './Container.scss';

const Container = ({ children, ...props }) => (
  <div
    className={styles.container}
    {...props}
  >
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
