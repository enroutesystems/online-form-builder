import { Component } from 'react';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        type="radio"
        name={this.props.name}
        checked={this.props.checked}
        onChange={this.props.onChange} />
    )
  }
}
