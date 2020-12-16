import { Component } from 'react';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles["d-flex"]}>
        <label>http://
          <input
            value={this.props.children}
            type="text"
            onChange={this.props.onChange} />
        </label>
      </div>
    )
  }
}
