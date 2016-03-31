import React from 'react';
import Highlight from 'react-highlight';
import Nav from 'components/Nav';
import Logo from 'components/Logo';
import Button from 'components/Button';
import styles from './App.scss';

const App = () => (
  <div>
    <Nav />
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
    <div className={styles.install}>
      <div className={styles.container}>
        <h2>Installation</h2>
        <Highlight className="console">
          {"$ npm install closecss"}
        </Highlight>
      </div>
    </div>
    <div className={styles.how}>
      <div className={styles.container}>
        <h2>How It Works</h2>
        <div className={styles.row}>
          <div className={styles.twoColumn}>
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
          </div>
          <div className={styles.twoColumn}>
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
          </div>
        </div>
      </div>
    </div>
    <div className={styles.taglineBase}>
      <div className={styles.container}>
        <h2 className={styles.tagline}>A CSS preprocessor for when you've... almost got it.</h2>
      </div>
    </div>
    <div className={styles.features}>
      <div className={styles.container}>
        <div className={styles.twoColumn}>
          <h2>What is CloseCSS</h2>
          <p>Consectetur inventore corporis nobis neque molestiae! Libero tempore ducimus
            deleniti tenetur voluptatibus. Quos quis nostrum delectus nulla omnis tempore.</p>
        </div>
        <div className={styles.twoColumn}>
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
        </div>
      </div>
    </div>
  </div>
);

export default App;
