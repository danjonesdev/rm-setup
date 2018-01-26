import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

export class About extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className="page-fade-in h-100">
        <Helmet title="About" />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="mt4">About Rendah</h1>
              <p className="pv4">
                {'It didnt seem right that whilst so much was happening within the scene, there were so few places to read about it. Rendah was created to provide some webspace exposure for halftime/beats producers and DJs, we honestly just wanted somewhere for people to read about the hype, so here it is.'}
              </p>
            </div>
            <div className="col-sm-12">
              img here
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default About;
