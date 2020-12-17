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
        <label key={option.optionAnswerId}>
          {option.text}
          <Radio name={this.props.formId} onChange={this.handleChange} optionAnswerId={option.optionAnswerId}/>
        </label>
      ))
    );
  }
}
