import { Component } from 'react';
import styles from './text.module.scss';

export default class Text extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type="text" onChange={this.handleChange} placeholder="Type something interesting..."/>
    );
  }
}
