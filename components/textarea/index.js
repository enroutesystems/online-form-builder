import React, { Component } from 'react';
import styles from './textarea.module.scss';

export default class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Type here your awesome answer...'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <textarea value={this.state.value} onChange={this.handleChange} />
    );
  }
}
