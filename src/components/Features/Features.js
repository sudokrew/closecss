import React from 'react';
import Container from 'components/grid/Container';
import Row from 'components/grid/Row';
import Col from 'components/grid/Col';
import styles from './Features.scss';

const Features = () => (
  <div className={styles.base}>
    <Container>
      <Row>
        <Col size="md" colWidth={6}>
          <h2>What is CloseCSS</h2>
          <p>
            A CSS preprocessor that does away with the cumbersome and unnecessary.
            Focus on functionality, or you know, whatever.
          </p>
        </Col>
        <Col size="md" colWidth={6}>
          <h2>Features</h2>
          <Row>
            <Col size="xs" colWidth={6}>
              <ul>
                <li>tallish</li>
                <li>whatever</li>
                <li>blueish</li>
                <li>largeish</li>
                <li>redish</li>
                <li>curvish</li>
              </ul>
            </Col>
            <Col size="xs" colWidth={6}>
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
);

export default Features;
