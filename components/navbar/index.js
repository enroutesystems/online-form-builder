import React, { Component } from 'react';
import styles from '../navbar/navbar.module.scss';

export default class Navbar extends Component {
  render() {
    return(
      <nav className={`${styles["d-flex"]} ${styles.nav}`}>
        <div className={`${styles["d-flex"]}  ${styles.container}`}>
          <a className={`${styles["d-flex"]} ${styles.brand} ${styles.link}`} href=""><img className={styles.logo} src="/icons8-poll-96.png" alt="app logo" />Poll</a>
          <ul className={`${styles["d-flex"]} ${styles.menu}`}>
            <li className={styles.item}>
              <a className={`${styles.link} ${styles.btn} ${styles["log-in"]}`} href="">Log In</a>
            </li>
            <li className={styles.item}>
              <a className={`${styles.link} ${styles.btn} ${styles["sign-up"]}`} href="">Sign Up</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href=""><img className={styles.profile} src="/icons8-test-account-80.png" alt="user profile picture" /></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

