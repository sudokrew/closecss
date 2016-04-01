import React from 'react';
import Highlight from 'react-highlight';
import Container from 'components/grid/Container';
import Row from 'components/grid/Row';
import Col from 'components/grid/Col';
import styles from './HowItWorks.scss';

const Hero = () => (
  <div className={styles.base} id="how-it-works">
    <Container>
      <h2>How It Works</h2>
      <Row>
        <Col size="md" colWidth={6}>
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
        <Col size="md" colWidth={6}>
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
);

export default Hero;
