import React from 'react';
import Logo from 'components/Logo';
import Button from 'components/Button';
import styles from './Hero.scss';

const Hero = () => (
  <div className={styles.hero}>
    <div className={styles.container}>
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
    </div>
  </div>
);

export default Hero;
