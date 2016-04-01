import React from 'react';
import Container from 'components/grid/Container';
import Logo from 'components/Logo';
import Meme from 'components/Meme';
import Button from 'components/Button';
import styles from './Hero.scss';

const Hero = () => (
  <div className={styles.hero}>
    <Container>
      <div className={styles.logo}>
        <Logo fill="#FFFFFF" />
      </div>
      <div className={styles.heroText}>
        <h1>Fuck it, close enough.</h1>
        <p className={styles.content}>
          Accuracy. Precision. Exactitude. Who gives a shit?
          When done is better than perfect, this CSS preprocessor is up to task.
        </p>
        <div className={styles.action}>
          <Button href="#how-it-works" type="secondary">Learn More</Button>
          <Button href="https://github.com/sudokrew/closecss" type="primary" target="_blank">View on GitHub</Button>
        </div>
      </div>
    </Container>
    <Meme className={styles.meme} fill="rgba(0, 0, 0, 0.05)" size={600} />
  </div>
);

export default Hero;
