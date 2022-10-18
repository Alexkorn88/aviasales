import React from 'react';

import logo from '../img/logo.svg';

import styles from './header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
    </div>
  );
}
export default Header;
