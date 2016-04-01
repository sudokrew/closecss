import React from 'react';
import Nav from 'components/Nav';
import Hero from 'components/Hero';
import Installation from 'components/Installation';
import HowItWorks from 'components/HowItWorks';
import Tagline from 'components/Tagline';
import Features from 'components/Features';
import Footer from 'components/Footer';
import styles from './App.scss';

const App = () => (
  <div>
    <Nav />
    <Hero />
    <Installation />
    <HowItWorks />
    <Tagline />
    <Features />
    <Footer />
  </div>
);

export default App;
