import { Component } from 'react';

export default class OptionsRadioBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionCounter: [1, 2],
    }

    this.addOption = this.addOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
  }

  addOption() {
    this.setState(function (prevState) {
      if (prevState.optionCounter.length === 6) return;

      let i = prevState.optionCounter[prevState.optionCounter.length - 1] + 1;

      prevState.optionCounter.push(i);
      console.log(prevState)
      return prevState;
    })
  }

  removeOption(key) {
    this.setState(function (prevState) {
      if (prevState.optionCounter.length === 2) return;

      prevState.optionCounter.splice(key,1);
      return prevState;
    })
  }

  render() {
    return(
      <div>
        {this.state.optionCounter.map((value, index) => (
          <div key={index}>
            <input/>
            {index > 1 ? <button onClick={() => {this.removeOption(index)}}>Remove Option</button> : null}
          </div>
        ))}
        <button onClick={this.addOption}>Add Option</button>
      </div>
    )
  }
}
