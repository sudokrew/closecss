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
      <h1>A CSS preprocessor for when you've... almost got it.</h1>
    </div>
  </div>
);

export default App;
