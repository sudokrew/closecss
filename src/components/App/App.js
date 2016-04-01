import React from 'react';
import Container from 'components/grid/Container';
import Row from 'components/grid/Row';
import Col from 'components/grid/Col';
import Nav from 'components/Nav';
import Hero from 'components/Hero';
import Installation from 'components/Installation';
import HowItWorks from 'components/HowItWorks';
import Tagline from 'components/Tagline';
import styles from './App.scss';

const App = () => (
  <div>
    <Nav />
    <Hero />
    <Installation />
    <HowItWorks />
    <Tagline />
    <div className={styles.features}>
      <Container>
        <Row>
          <Col size={6}>
            <h2>What is CloseCSS</h2>
            <p>
              A CSS preprocessor that does away with the cumbersome and unnecessary.
              Focus on functionality, or you know, whatever.
            </p>
          </Col>
          <Col size={6}>
            <h2>Features</h2>
            <Row>
              <Col size={6}>
                <ul>
                  <li>tallish</li>
                  <li>whatever</li>
                  <li>blueish</li>
                  <li>largeish</li>
                  <li>redish</li>
                  <li>curvish</li>
                </ul>
              </Col>
              <Col size={6}>
                <ul>
                  <li>smallish</li>
                  <li>thickish</li>
                  <li>roundish</li>
                  <li>boldish</li>
                  <li>farish</li>
                  <li>mediumish</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
    <div className={styles.footer}>
      <div className={styles.container}>
        <h6><a href="https://github.com/sudokrew/closecss">CloseCSS</a> &copy; 2016</h6>
      </div>
    </div>
  </div>
);

export default App;
