import React, { Component } from 'react';
import styles from './navbar.module.scss';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <nav className={`${styles["d-flex"]} ${styles.nav}`}>
        <div className={`${styles["d-flex"]} ${styles.container}`}>
          <a className={`${styles["d-flex"]} ${styles.brand}`} href="">BrandName</a>
            {!this.props.isLogin && (
              <ul className={`${styles["d-flex"]} ${styles.menu}`}>
                <li>
                  <a className={`${styles.btn} ${styles["log-in"]}`} href="">Log In</a>
                </li>
                <li>
                  <a className={`${styles.btn} ${styles["sign-up"]}`} href="">Sign Up</a>
                </li>
              </ul>
            )}
            {this.props.isLogin && (
              <a href=""><img className={styles.profile} src="/icons8-test-account-80.png" alt="user profile picture" /></a>
            )}
        </div>
      </nav>
    );
  }
}

