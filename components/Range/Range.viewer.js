import { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export default class Range extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.minValue,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
    this.props.onValueChange(value);
  }

  render() {
    return (
      <InputRange
        maxValue={this.props.maxValue}
        minValue={this.props.minValue}
        value={this.state.value}
        onChange={this.handleChange} />
    );
  }
}
