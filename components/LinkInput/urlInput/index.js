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
          <input className="rounded bg-gray-100 px-2 border-gray-100 h-8 mx-2"
            disabled={this.props.disabled}
            onKeyUp={this.handleKeyUp}
            value={this.props.children}
            type="text"
            onChange={this.props.onChange} />
        </label>
    )
  }
}
