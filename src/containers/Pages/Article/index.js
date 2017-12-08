/* eslint-disable import/no-named-as-default, react/no-array-index-key */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Instafeed from 'react-instafeed';
import FacebookProvider, { Comments } from 'react-facebook';

import ArticleInfo from '../../../containers/Fragments/ArticleInfo';
import ExtraArticles from '../../../containers/Fragments/ExtraArticles';

// Export this for unit testing more easily
export class Article extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main>
        <ArticleInfo match={this.props.match} />
        <h2 className="tac  mb4">Comments</h2>
        <div className="container  tac">
          <div className="row">
            <div className="col-md-16 col-md-offset-4">
              <FacebookProvider appId="154881868603516">
                <Comments href="http://www.facebook.com" numPosts={3} width="100%" />
              </FacebookProvider>
            </div>
          </div>
        </div>
        <h2 className="tac  mb4">More articles</h2>
        <ExtraArticles />
        <h2 className="tac  mb4">Insta Feed</h2>
        <div id="instaFeed" className="container  mb4">
          <Instafeed
            limit="12"
            resolution="standard_resolution"
            sortBy="most-recent"
            target="instaFeed"
            template=""
            userId="6646546960"
            clientId="1375f42790124e1ba319055cd4f93ec5"
            accessToken="6646546960.1677ed0.8eb1d2cceba64706aed91890d352c904"
          />
        </div>
      </main>
    );
  }
}

Article.propTypes = {
  match: PropTypes.shape(),
};

Article.defaultProps = {
  match: [],
};

export default Article;
