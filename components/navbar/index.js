import React, { Component } from 'react';
import styles from './navbar.module.scss';
import { useSession } from 'next-auth/client'


export default function Navbar() {
  const [session, loading] = useSession();
  return(
    <nav className={`${styles["d-flex"]} ${styles.nav}`}>
      <div className={`${styles["d-flex"]} ${styles.container}`}>
        <a className={`${styles["d-flex"]} ${styles.brand}`} href="">
          <img src="https://img.icons8.com/ios/50/000000/test.png"/>
          Formify
        </a>
          {!session && (
            <ul className={`${styles["d-flex"]} ${styles.menu}`}>
              <li>
                <a className={`${styles.btn} ${styles["log-in"]}`} href="/api/auth/signin">Sign In</a>
              </li>
              <li>
                <a className={`${styles.btn} ${styles["sign-up"]}`} href="/api/auth/signup">Sign Up</a>
              </li>
            </ul>
          )}
          {session && (
            <ul className={`${styles["d-flex"]} ${styles.menu}`}>
              <li>
                <a className={styles["d-flex"]} href="">
                  {session.user.email}
                  <img className={styles.profile}
                       src="https://img.icons8.com/ios-filled/50/000000/user-male-circle.png"/>
                </a>
              </li>
              <li>
                <a className={styles["sign-out"]} href="/api/auth/signout"><img src="https://img.icons8.com/ios-filled/50/000000/logout-rounded.png"/></a>
              </li>
            </ul>

          )}
      </div>
    </nav>
  );
}
