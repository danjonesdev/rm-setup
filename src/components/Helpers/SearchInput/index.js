/* @flow */
/* eslint-disable import/no-named-as-default, react/no-array-index-key, react/self-closing-comp */

import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Export this for unit testing more easily
export class SearchInput extends PureComponent {
  constructor() {
    super();
    this.state = {
      fireRedirect: false,
      inputValue: '',
    };
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value,
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    this.setState({ fireRedirect: true });
  }

  render() {
    const { from } = this.props.location.state || '/';
    const { fireRedirect } = this.state;

    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input type="text" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
        </form>
        {fireRedirect && (
          <Redirect push to={from || `/search/${this.state.inputValue}`} />
        )}
      </div>
    );
  }
}

SearchInput.propTypes = {
  location: PropTypes.shape(),
};

SearchInput.defaultProps = {
  location: {},
};

export default SearchInput;
