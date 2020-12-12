import React, { Component } from 'react';
import styles from './textarea.module.scss';

export default class Textarea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <textarea onChange={this.handleChange} placeholder="Type something interesting..."/>
    );
  }
}
