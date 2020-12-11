import React, { Component } from 'react';
import styles from './login.module.scss';

export default class Login extends Component {
  render() {
    return(
      <section className={styles.form}>
        <div className={styles["form-header"]}>
          <a className={styles.brand} href="/login"><img src="" alt=""/>BrandName</a>
          <p>Hello, who's this?</p>
        </div>
        <div>
          <form action="POST">
            <label htmlFor="email"> Email <br />
              <input type="email" name="email" id="email" placeholder="john.doe@email.com"/>
            </label> <br />
            <label htmlFor="password">Password<br />
              <input type="password" name="email" id="password"/>
            </label>
            <button>Log In</button>
          </form>
        </div>
      </section>
    );
  }
}
