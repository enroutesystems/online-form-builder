import { Component } from 'react';
import UrlInput from './urlInput';s
import styles from './LinkInput.module.scss'

export default class MultipleOptions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <UrlInput disabled={this.props.disabled} />
    );
  }
}
