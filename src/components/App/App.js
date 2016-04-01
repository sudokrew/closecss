import React from 'react';
// import Container from 'components/grid/Container';
// import Row from 'components/grid/Row';
// import Col from 'components/grid/Col';
import Nav from 'components/Nav';
import Hero from 'components/Hero';
import Installation from 'components/Installation';
import HowItWorks from 'components/HowItWorks';
import Tagline from 'components/Tagline';
import Features from 'components/Features';
import styles from './App.scss';

const App = () => (
  <div>
    <Nav />
    <Hero />
    <Installation />
    <HowItWorks />
    <Tagline />
    <Features />
    <div className={styles.footer}>
      <div className={styles.container}>
        <h6><a href="https://github.com/sudokrew/closecss">CloseCSS</a> &copy; 2016</h6>
      </div>
    </div>
  </div>
);

export default App;
