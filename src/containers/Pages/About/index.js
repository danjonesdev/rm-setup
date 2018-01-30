/* eslint-disable max-len */

import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

export class About extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className="page-fade-in">
        <Helmet title="About" />
        <div className="container  tac">
          <div className="row">
            <div className="col-xs-24">
              <h1 className="mt4  mb3">About Rendah</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-16  col-md-offset-4">
              <h2 className="pv2">Why?</h2>
              <p className="pv3">
                It didn&#39;t seem right that whilst so much was happening within the scene, there were so few places to read about it.
                Rendah was created to provide some webspace exposure for halftime/beats producers and DJ&#39;s, we honestly just wanted
                somewhere for people to read about the hype, so here it is.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12  col-md-offset-6">
              <h2 className="pv2">Who?</h2>
              <p className="pv3">
                Web developer/Halftime beats Producer <a href="www.github.com" rel="noopener noreferrer" target="_blank" className="underline  black  link">Dan Jones</a>
                (AKA <a href="www.github.com" rel="noopener noreferrer" target="_blank" className="underline  black link">Aagentah</a>) founded & created Rendah as a keen
                side project using Node.js & React.js, Rendah is completely open-sourced and we encourage other developers to
                help <a href="https://github.com/danjonesdev" rel="noopener noreferrer" target="_blank" className="underline  black  link">contribute to the site!</a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12  col-md-offset-6">
              <h2 className="pv2">What About You?</h2>
              <p className="pv3">
                We&#39;re constantly encouraging people to get involved, as clichue as it sounds, Rendah is about community, so wether you&#39;re an
                artist, a designer, a writer, a developer or anything else and want to get
                involed <Link to={'/Contact'} className="underline  black  link">please get in touch!</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default About;
