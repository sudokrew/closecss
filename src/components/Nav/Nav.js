import React from 'react';
// import Logo from 'components/Logo';
import styles from './Nav.scss';

const social = ['Github', 'Tweet', 'Share'];

const Nav = () => {
  const navItems = social.map((c, i) => (
    <li key={i} className={styles.linkItem}>
      <a href="#">{c}</a>
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
