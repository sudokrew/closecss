import React from 'react';
import Logo from 'components/Logo';
import Button from 'components/Button';
import styles from './Hero.scss';

const Hero = () => (
  <div className={styles.hero}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.heroText}>
        <h1>Fuck it, close enough.</h1>
        <p>
          Lorem aperiam natus soluta porro hic accusamus odit.
          Cum voluptatem quia eaque beatae sunt?
          Nostrum saepe deleniti quia facere mollitia.
        </p>
        <div className={styles.action}>
          <Button href="#" type="secondary">Learn More</Button>
          <Button href="#" type="primary">View on GitHub</Button>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;