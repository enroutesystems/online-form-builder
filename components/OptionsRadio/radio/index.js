import { Component } from 'react';

export default class Radio extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(this.props.optionAnswerId);
  }

  render() {
    return (
      <input
        type="radio"
        name={this.props.name}
        onChange={this.handleChange} />
    )
  }
}
