import React from 'react';
import Nav from 'components/Nav';
import Logo from 'components/Logo';
import styles from './App.scss';

const App = () => (
  <div>
    <Nav />
    <div className={styles.hero}>
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
        <a href="#">Learn More</a>
        <a href="#">GitHub</a>
      </div>
    </div>
  </div>
);

export default App;
