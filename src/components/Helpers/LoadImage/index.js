/* eslint-disable import/no-named-as-default,
  react/no-array-index-key,
  jsx-a11y/no-static-element-interactions,
  react/no-array-index-key,
  jsx-a11y/no-noninteractive-element-interactions,
  react/prefer-stateless-function */

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Image, Transformation } from 'cloudinary-react';

export class LoadImage extends PureComponent {
  constructor() {
    super();
    this.state = {
      highQualityHidden: true,
      lowQualityHidden: false,
    };
  }
  test = () => {
    this.setState({ lowQualityHidden: true });
    this.setState({ highQualityHidden: false });
  }

  render() {
    const highQuality = classNames({ 'is-hidden': this.state.highQualityHidden });
    const lowQuality = classNames({ 'is-hidden': this.state.lowQualityHidden });

    return (
      <div>
        <Image className={`${this.props.styles}  ${highQuality}`} onLoad={this.test()} cloudName="dzz8ji5lj" publicId="articles/2014_2F10_2F24_2F46_2FRave.8824e.jpg" />

        <Image className={`mb3  latestArticleList__img  ${lowQuality}`} cloudName="dzz8ji5lj" publicId="articles/2014_2F10_2F24_2F46_2FRave.8824e.jpg">
          <Transformation quality="0" />
          <Transformation effect="blur:2000" />
        </Image>
      </div>
    );
  }
}

LoadImage.propTypes = {
  styles: PropTypes.string,
};

LoadImage.defaultProps = {
  styles: '',
};

export default LoadImage;
