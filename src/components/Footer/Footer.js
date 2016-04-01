import React from 'react';
import Container from 'components/grid/Container';
import styles from './Footer.scss';

const Footer = () => (
  <div className={styles.base}>
    <Container>
      <h6><a href="https://github.com/sudokrew/closecss">CloseCSS</a> &copy; 2016</h6>
    </Container>
  </div>
);

export default Footer;
