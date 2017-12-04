/* eslint-disable import/no-named-as-default, react/no-array-index-key, react/prefer-stateless-function, max-len */

import React, { PureComponent } from 'react';

// Export this for unit testing more easily
export class LatestArticleListLoading extends PureComponent {
  render() {
    return (
      <div className="latestArticleList__loading" />
    );
  }
}

export default LatestArticleListLoading;
