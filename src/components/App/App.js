import React from 'react';
import Highlight from 'react-highlight';
import Container from 'components/grid/Container';
import Row from 'components/grid/Row';
import Col from 'components/grid/Col';
import Nav from 'components/Nav';
import Hero from 'components/Hero';
import styles from './App.scss';

const App = () => (
  <div>
    <Nav />
    <Hero />
    <div className={styles.install}>
      <Container>
        <h2>Installation</h2>
        <Highlight className="console">
          {"$ npm install closecss"}
        </Highlight>
      </Container>
    </div>
    <div className={styles.how}>
      <Container>
        <h2>How It Works</h2>
        <Row>
          <Col size={6}>
            <h5>You put close enough CSS in</h5>
            <Highlight className="css">
              {"body {"} <br/>
              {"  height: 100vh;"} <br/>
              {"  background: somewhat('blueish');"} <br/>
              {"  color: somewhat('orangeish');"} <br/>
              {"  font-family: Helvetica, sans-serif;"} <br/>
              {"}"} <br/>
              <br/>
              {".container {"} <br/>
              {"  width: somewhat('largish');"} <br/>
              {"  margin: somewhat('tallish') auto;"} <br/>
              {"}"}
            </Highlight>
          </Col>
          <Col size={6}>
            <h5>And get close enough CSS out</h5>
            <Highlight className="css">
              {"body {"} <br/>
              {"  height: 100vh;"} <br/>
              {"  background: #0000FF;"} <br/>
              {"  color: #F3A618;"} <br/>
              {"  font-family: Helvetica, sans-serif;"} <br/>
              {"}"} <br/>
              <br/>
              {".container {"} <br/>
              {"  width: 1024px;"} <br/>
              {"  margin: 100px auto;"} <br/>
              {"}"}
            </Highlight>
          </Col>
        </Row>
      </Container>
    </div>
    <div className={styles.taglineBase}>
      <Container>
        <h2 className={styles.tagline}>A CSS preprocessor for when you've... almost got it.</h2>
      </Container>
    </div>
    <div className={styles.features}>
      <Container>
        <Row>
          <Col size={6}>
            <h2>What is CloseCSS</h2>
            <p>Consectetur inventore corporis nobis neque molestiae! Libero tempore ducimus
              deleniti tenetur voluptatibus. Quos quis nostrum delectus nulla omnis tempore.</p>
          </Col>
          <Col size={6}>
            <h2>Features</h2>
            <div className={styles.row}>
              <div className={styles.twoColumn}>
                <ul>
                  <li>tallish</li>
                  <li>whatever</li>
                  <li>blueish</li>
                  <li>largeish</li>
                  <li>redish</li>
                  <li>curvish</li>
                </ul>
              </div>
              <div className={styles.twoColumn}>
                <ul>
                  <li>smallish</li>
                  <li>thickish</li>
                  <li>roundish</li>
                  <li>boldish</li>
                  <li>farish</li>
                  <li>mediumish</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className={styles.footer}>
      <div className={styles.container}>
        <h5>Footer</h5>
      </div>
    </div>
  </div>
);

export default App;
