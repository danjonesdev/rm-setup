/* eslint-disable import/no-named-as-default,
  react/no-array-index-key,
  jsx-a11y/no-static-element-interactions,
  react/no-array-index-key,
  jsx-a11y/no-noninteractive-element-interactions */

import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class LatestAuthorListLoaded extends PureComponent {
  constructor() {
    super();
    this.state = {
      fireRedirect: false,
      authorId: null,
      isLeaving: false,
    };
  }

  handleClick = (id) => {
    this.setState({ isLeaving: true });
    setTimeout(() => {
      this.setState({ authorId: id });
      this.setState({ fireRedirect: true });
    }, 200);
  }

  render() {
    const isLeavingClass = classNames({ 'latestAuthorList__col--leaving': this.state.isLeaving });
    const { from } = this.props.location.state || '/';
    const fireRedirect = this.state.fireRedirect;

    return (
      <div className="container  mv4">
        <div className="row">
          {this.props.list.map((author, i) => (
            <div key={i} className="link  latestAuthorList__cont">
              <div className={`col-sm-12  col-md-6  tac-sm  pv3  latestAuthorList__col--latest  ${isLeavingClass}`}>
                <p className="grey  t8  pv2  latestAuthorList__intro">{author.name}</p>
              </div>
            </div>
          ))}
        </div>
        {fireRedirect ? (
          <Redirect push to={from || `/Author/${this.state.authorId}`} />
        ) : (
          false
        )}
      </div>
    );
  }
}

LatestAuthorListLoaded.propTypes = {
  list: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.shape(),
};

LatestAuthorListLoaded.defaultProps = {
  list: [],
  location: {},
};

export default LatestAuthorListLoaded;
