/* eslint-disable import/no-named-as-default, jsx-a11y/no-noninteractive-element-interactions */

import React, { PureComponent } from 'react';
import classNames from 'classnames';

// Export this for unit testing more easily
export class Cross extends PureComponent {
  constructor() {
    super();
    this.state = {
      isPressed: false,
    };
  }

  isPressed = () => {
    if (this.state.isPressed) {
      this.setState({
        isPressed: false,
      });
    } else {
      this.setState({
        isPressed: true,
      });
    }
  }
  render() {
    const btnClass = classNames({
      'btn-pressed': this.state.isPressed,
    });
    return <label className={btnClass} htmlFor="navigation" onClick={this.isPressed}><span /></label>;
  }
}

export default Cross;