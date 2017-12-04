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
      placeholder: 'search by keyword...',
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

  redir = () => {
    const { from } = this.props.location.state || '/';
    if (this.state.fireRedirect) {
      this.setState({ fireRedirect: false });
      if (this.state.inputValue) {
        this.setState({ placeholder: 'search by keyword...' });
        return <Redirect push to={from || `/search/${this.state.inputValue}`} />;
      }
      this.setState({ placeholder: 'search something?...' });
      return false;
    }
    return false;
  }

  render() {
    return (
      <div className="searchInput">
        <form className="searchInput__form" onSubmit={this.submitForm}>
          <input className="ph2  searchInput__input" type="search" placeholder={this.state.placeholder} value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
        </form>
        {this.redir()}
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
