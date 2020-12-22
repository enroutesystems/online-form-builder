import { Component } from 'react';
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

  componentDidMount() {
    this.props.onMinChange(this.props.state);
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
        Min: <input className="w-20 px-3 mr-2 h-8 border-gray-300" type="number" defaultValue={this.state.minValue} name="range" max={+this.state.maxValue - 1} onKeyUp={(e) => {this.handleKeyUp(e, 'min')}}/>
        Max: <input className="w-20 px-3 h-8 border-gray-300" type="number" defaultValue={this.state.maxValue} name="range" min={+this.state.minValue + 1} onKeyUp={(e) => {this.handleKeyUp(e, 'max')}} />
      </>
    );
  }
}
