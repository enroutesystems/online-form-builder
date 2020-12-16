import { Component } from 'react';
import styles from './text.module.scss';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    onPointAdded = {}
  }

  render() {
    return (
      <input type="text" onChange={this.handleChange} placeholder="Type something interesting..."/>
    );
  }
}

