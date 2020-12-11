import React, { Component } from 'react';
import styles from './home.module.scss';

export default class Welcome extends Component {
  render() {
    return(
        <section className={`${styles.message} ${styles["d-flex"]}`}>
          <div className={`${styles.container} ${styles["d-flex"]}`}>
            <div>
              <h2>Engange your Audience</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores assumenda consequuntur dolorum incidunt laboriosam nihil, tempore unde vel vero! Deserunt excepturi illo inventore quae saepe! Debitis eum ipsa totam.</p>
              <a href="" className={styles.btn}>Get started!</a>
            </div>
            <img src="https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="be curious"/>
          </div>
        </section>
    );
  }
}

