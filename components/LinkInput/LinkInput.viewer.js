import { Component } from 'react';
import UrlInput from "./urlInput";

export default class LinkInputBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkCounter: [{index: 0, text: ''}]
    };
    this.addOption = this.addOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
  }

  addOption() {
    this.setState(function (prevState) {
      if (prevState.linkCounter.length === 6) return;

      let i = this.state.linkCounter.length;

      prevState.linkCounter.push({index: i, text: ''});
      this.props.onUrlInputs(prevState.linkCounter);
      return prevState;
    })
  }

  removeOption(key) {
    this.setState(function (prevState) {
      if (prevState.linkCounter.length === 1) return;

      prevState.linkCounter.splice(key,1);
      this.props.onUrlInputs(prevState.linkCounter);
      return prevState;
    })
  }

  handleKeyUp(e, value, index) {
    const newValue = {
      index,
      text: `//${e.target.value}`,
    };
    this.setState((prevState) => {
      const newArray = prevState.linkCounter.map(obj => {
        if (obj.index === index) {
          return newValue;
        } else {
          return obj;
        }
      })

      this.props.onUrlInputs(newArray);

      return {linkCounter: newArray};
    })
  }

  render() {
    return(
      <div>
        {this.state.linkCounter.map((value, index) => (
          <div class="mb-2" key={index}>
            <UrlInput onKeyUp={(e) => this.handleKeyUp(e, value, index)}/>
            {index >= 1 ? <button className="rounded bg-red-500 text-white text-lg h-8 px-2 text-center hover:bg-red-600 cursor-pointer" onClick={() => {this.removeOption(index)}}>Remove URL</button> : null}
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
