import { Component } from 'react';

export default class OptionsRadioBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionCounter: [{index: 0, text: ''}, {index: 1, text: ''}]
    };
    this.addOption = this.addOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
  }

  addOption() {
    this.setState(function (prevState) {
      if (prevState.optionCounter.length === 6) return;

      let i = this.state.optionCounter.length;

      prevState.optionCounter.push({index: i, text: ''});
      this.props.onRadioOptions(prevState);
      return prevState;
    })
  }

  removeOption(key) {
    this.setState(function (prevState) {
      if (prevState.optionCounter.length === 2) return;

      prevState.optionCounter.splice(key,1);
      this.props.onRadioOptions(prevState);
      return prevState;
    })
  }

  handleKeyUp(e, value, index) {
    const newValue = {
      index,
      text: e.target.valuet,
    };
    this.setState((prevState) => {
      const newArray = prevState.optionCounter.map(obj => {
        if (obj.index === index) {
          return newValue;
        } else {
          return obj;
        }
      })

      this.props.onRadioOptions(newArray);

      return {optionCounter: newArray};
    })
  }

  render() {
    return(
      <div>
        {this.state.optionCounter.map((value, index) => (
          <div key={index}>
            <input onKeyUp={(e) => this.handleKeyUp(e, value, index)}/>
            {index > 1 ? <button onClick={() => {this.removeOption(index)}}>Remove Option</button> : null}
          </div>
        ))}
        <button onClick={this.addOption}>Add Option</button>
      </div>
    )
  }
}
