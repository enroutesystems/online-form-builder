import { Component } from 'react';
import Radio from './radio';
import styles from './OptionsRadio.module.scss';

export default class RadioOptions extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(optionAnswerId) {
    this.props.onSelectOption(optionAnswerId);
  }

  render() {
    return (
      this.props.radioOptions.map(option => (
        <div key={option.optionAnswerId}>
          <label>
            <Radio name={this.props.formId + this.props.questionNumber} onChange={this.handleChange} optionAnswerId={option.optionAnswerId}/>
            {option.text}
          </label><br />
        </div>
      ))
    );
  }
}
