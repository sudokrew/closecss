import React from 'react';
import Highlight from 'react-highlight';
import Container from 'components/grid/Container';
import styles from './Installation.scss';

const Hero = () => (
  <div className={styles.install}>
    <Container>
      <h2>Installation</h2>
      <Highlight className="console">
        {"$ npm install -g closecss"}
      </Highlight>
    </Container>
  </div>
);

export default Hero;
