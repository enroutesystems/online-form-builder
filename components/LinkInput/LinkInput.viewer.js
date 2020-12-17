import { Component } from 'react';
import UrlInput from './urlInput';
import styles from 'LinkInput.module.scss'

export default class MultipleOptions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <UrlInput />
    );
  }
}
