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
          <div key={index}>
            <UrlInput onKeyUp={(e) => this.handleKeyUp(e, value, index)}/>
            {index >= 1 ? <button onClick={() => {this.removeOption(index)}}>Remove URL</button> : null}
          </div>
        ))}
        <button onClick={this.addOption}>Add URL</button>
      </div>
    )
  }
}
