import React from 'react';
import Container from 'components/grid/Container';
import styles from './Tagline.scss';

const Tagline = () => (
  <div className={styles.base}>
    <Container>
      <h2 className={styles.tagline}>A CSS preprocessor for when you've... almost got it.</h2>
    </Container>
  </div>
);

export default Tagline;
