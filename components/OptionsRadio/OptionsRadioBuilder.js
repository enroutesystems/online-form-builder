import { Component } from 'react';

export default class OptionsRadioBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionCounter: props.options || [{index: 0, text: ''}, {index: 1, text: ''}]
    };
    this.addOption = this.addOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
  }

  addOption() {
    this.setState(function (prevState) {
      if (prevState.optionCounter.length === 6) return;

      let i = this.state.optionCounter.length;

      prevState.optionCounter.push({index: i, text: ''});
      this.props.onRadioOptions(prevState.optionCounter);
      return prevState;
    })
  }

  removeOption(key) {
    if (this.state.optionCounter.length === 2) return;

    this.state.optionCounter.splice(key, 1);
    this.props.onRadioOptions(this.state.optionCounter)
    this.setState(this.state)
  }

  handleKeyUp(e, value, index) {
    const newValue = {
      index,
      text: e.target.value,
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
          <div className="flex" key={index}>
            <input className="rounded bg-gray-100 px-2 border-gray-100 mb-2 h-8 w-1/3" onKeyUp={(e) => this.handleKeyUp(e, value, index)} defaultValue={this.state.optionCounter[index].text} placeholder={`Option ${index + 1}`}/>
            {index > 1 ? <div className="rounded ml-2 bg-red-500 text-white text-lg h-8 px-3 text-center align-middle hover:bg-red-600 cursor-pointer" onClick={() => {this.removeOption(index)}}><a className="text-lg text-center">Remove</a></div> : null}
          </div>
        ))}
        <div className="rounded bg-green-500 text-white text-lg h-8 w-1/3 px-3 text-center align-middle hover:bg-green-600 cursor-pointer" 
        onClick={this.addOption}>
          <a className="text-lg text-center">Add</a>
        </div>

      </div>
    )
  }
}
