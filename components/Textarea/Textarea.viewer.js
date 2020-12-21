import { Component } from 'react';
import styles from './textarea.module.scss';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
  }

  handleKeyUp(e) {
    this.props.onTextInput(e.target.value);
  }

  render() {
    console.log(this.state);
    return (
      <textarea disabled={this.props.disabled} onKeyUp={(e) => this.handleKeyUp(e)} onChange={this.handleChange} rows="4" cols="50" placeholder="Type something interesting..."></textarea>
    );
  }
}
