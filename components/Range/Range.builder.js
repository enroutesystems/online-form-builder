import { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export default class RangeBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minValue: 0,
      maxValue: 10
    };

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e, input) {
    if (input === 'min') {
      this.props.onMinChange(e.target.value);
      this.setState((prevState) => {
        return { ...prevState, minValue: e.target.value}
      });
    } else {
      this.props.onMaxChange(e.target.value)
      this.setState((prevState) => {
        return { ...prevState, maxValue: e.target.value}
      });
    }
  }

  render() {
    return (
      <>
        <input type="number" name="range" style={{backgroundColor: 'red'}} max={+this.state.maxValue - 1} onKeyUp={(e) => {this.handleKeyUp(e, 'min')}}/>
        <input type="number" name="range" style={{backgroundColor: 'blue'}} min={+this.state.minValue + 1} onKeyUp={(e) => {this.handleKeyUp(e, 'max')}} />
      </>
    );
  }
}
