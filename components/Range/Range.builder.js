import { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export default class RangeBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minValue: props.minValue || 0,
      maxValue: props.maxValue || 10
    };

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e, input) {
    if (input === 'min') {
      this.props.onMinChange({
        ...this.state,
        minValue: parseInt(e.target.value) || 0
      });
      this.setState((prevState) => {
        return { ...prevState, minValue: parseInt(e.target.value) || 0}
      });
    } else {
      this.props.onMaxChange({
        ...this.state,
        maxValue: parseInt(e.target.value) || 0})
      this.setState((prevState) => {
        return { ...prevState, maxValue: parseInt(e.target.value) || 0}
      });
    }
  }

  render() {
    return (
      <>
        <input type="number" defaultValue={this.state.minValue} name="range" style={{backgroundColor: 'red'}} max={+this.state.maxValue - 1} onKeyUp={(e) => {this.handleKeyUp(e, 'min')}}/>
        <input type="number" defaultValue={this.state.maxValue} name="range" style={{backgroundColor: 'blue'}} min={+this.state.minValue + 1} onKeyUp={(e) => {this.handleKeyUp(e, 'max')}} />
      </>
    );
  }
}
