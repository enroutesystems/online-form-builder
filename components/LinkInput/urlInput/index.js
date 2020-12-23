import { Component } from 'react';

export default class UrlInput extends Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    this.props.onKeyUp(e)
  }

  render() {
    return (
        <label>http://
          <input className="px-3 mx-3 rounded"
            disabled={this.props.disabled}
            onKeyUp={this.handleKeyUp}
            value={this.props.children}
            type="text"
            onChange={this.props.onChange} />
        </label>
    )
  }
}
