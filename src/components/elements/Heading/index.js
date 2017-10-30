/* eslint-disable react/sort-comp */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Export this for unit testing more easily
export class Heading extends PureComponent {
  renderHeading = () => {
    switch (this.props.type) {
      case 'h1':
        return <h1 className={this.props.color}>{this.props.text}</h1>;
      case 'h2':
        return <h2 className={this.props.color}>{this.props.text}</h2>;
      case 'h3':
        return <h3 className={this.props.color}>{this.props.text}</h3>;
      case 'h4':
        return <h4 className={this.props.color}>{this.props.text}</h4>;
      case 'h5':
        return <h5 className={this.props.color}>{this.props.text}</h5>;
      case 'h6':
        return <h6 className={this.props.color}>{this.props.text}</h6>;
      default:
        console.log('Heading element not returned.');
        return null;
    }
  };

  render() {
    return (
      <div>
        {this.renderHeading()}
      </div>
    );
  }
}

Heading.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
};

Heading.defaultProps = {
  type: '',
  color: '',
  text: '',
};

export default Heading;
