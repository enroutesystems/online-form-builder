import { Component } from 'react';
import styles from './text.module.scss';

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
      <input type="text" disabled={this.props.disabled} onKeyUp={(e) => this.handleKeyUp(e)} onChange={this.handleChange} placeholder="Type something interesting..."/>
    );
  }
}

