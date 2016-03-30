import React from 'react';
import styles from './App.scss';
import Logo from 'components/Logo';

const App = () => (
  <div className="container">
    <h1 className={styles.heading}>CLOSE CSS</h1>
    <Logo />
    <section className={styles.section}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </section>
    <button>Button</button>
  </div>
);

export default App;
