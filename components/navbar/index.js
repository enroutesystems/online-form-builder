import React, { Component } from 'react';
import styles from '../navbar/navbar.module.scss';

export default class Navbar extends Component {
  render() {
    return(
      <nav className={(`${styles["d-flex"]} ${styles.nav}`)}>
        <a className={styles.brand} href=""><img className={styles.logo} src="" alt="" />LOGO</a>
        <ul className={`${styles["d-flex"]} ${styles.menu}`}>
          <li className={styles.item}>
            <a className={styles.link, styles.btn} href="">Log In</a>
          </li>
          <li className={styles.item}>
            <a className={styles.link, styles.btn} href="">Sign Up</a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href=""><img className={styles.profile} src="/icons8-test-account-80.png" alt="user profile picture" /></a>
          </li>
        </ul>
      </nav>
    );
  }
}

