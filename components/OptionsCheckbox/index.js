import { Component } from 'react';
import Checkbox from './checkbox'
import styles from './OptionsCheckbox.module.scss';

export default class OptionsCheckbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  render() {
    return (
      this.props.checkboxes.map(item => (
        <label key={item.optionID}>
          {item.name}
          <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
        </label>
      ))
    );
  }
}
