import React from 'react';
// import Logo from 'components/Logo';
import styles from './Nav.scss';

const githubStar = (
  <iframe src="https://ghbtns.com/github-btn.html?user=sudokrew&repo=closecss&type=star&count=true" frameBorder="0" scrolling="0" width="80px" height="20px"></iframe>
);
const twitter = (
  <a href="https://twitter.com/share" className="twitter-share-button" data-url="http://closecss.io" data-text="A CSS preprocessor for when you've... almost got it." data-via="CloseCSS">
    Tweet
  </a>
);
const facebook = (
  <div className="fb-share-button" data-href="http://closecss.io" data-layout="button"></div>
);

const social = [
  facebook,
  twitter,
  githubStar,
];

const Nav = () => {
  const navItems = social.map((c, i) => (
    <li key={i} className={styles.linkItem}>
      {c}
    </li>
  ));

  return (
    <nav className={styles.base}>
      <div className={styles.container}>
        <div className={styles.logo} >
          {/* <Logo size={40} /> */}
          <a href="#">CloseCSS</a>
        </div>
        <div className={styles.links} >
          <ul className={styles.linkList}>
            {navItems}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Nav.defaultProps = {
};

Nav.propTypes = {
};

export default Nav;
