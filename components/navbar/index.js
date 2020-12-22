import React, { Component } from 'react';
import styles from './navbar.module.scss';

export default function Navbar() {
  return(
    <nav className={`${styles["d-flex"]} ${styles.nav}`}>
      <div className={`${styles["d-flex"]} ${styles.container}`}>
        <a className={`${styles["d-flex"]} ${styles.brand}`} href="">
          <img src="https://img.icons8.com/ios/50/000000/test.png"/>
          Formify
        </a>
        <ul className={`${styles["d-flex"]} ${styles.menu}`}>
          <li>
            <a className={`${styles.btn} ${styles["log-in"]}`} href="/api/auth/signin">Log In / Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
