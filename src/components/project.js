import React, { Component } from 'react';

import pic1 from '../images/project1.jpg';
import pic2 from '../images/project2.jpg';
import pic3 from '../images/project3.jpg';
import pic4 from '../images/project4.jpg';

export default class Project extends Component {
  render() {
    return (
      <section>
          <div className="container-fluid">
              <div className="row">
                  <div className="col text-center mb-3">
                    <h1 className="text-warning display-2"> Projects </h1>
                    <p className="lead mx-auto text-secoundary">Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet consectetur ad Provident, aliquam?</p>
                  </div>
              </div>

              <div className="row text-center">
                  <div className="col-lg-3 col-sm-6">
                    <img src={pic1} className="img-thumbnail "/>
                    <h2 className="my-3 text-warning">Project One</h2>
                    <p className="text-justify text-muted">Lorem ipsum dolor ipsum dolor sit amet consectetur ad sit amet adipisicing elit.Totam!</p>
                  </div>
                  <div className="col-lg-3 col-sm-6  mt-3">
                    <img src={pic2} className="img-thumbnail "/>
                    <h2 className="my-3 text-warning">Project Two</h2>
                    <p className="text-justify text-muted">Lorem ipsum dolor ipsum dolor sit amet consectetur ad sit amet adipisicing elit.Totam!</p>
                  </div>
                  <div className="col-lg-3 col-sm-6 mt-4">
                    <img src={pic3} className="img-thumbnail "/>
                    <h2 className="my-3 text-warning">Project Three</h2>
                    <p className="text-justify text-muted">Lorem ipsum dolor sit ipsum dolor sit amet consectetur ad amet adipisicing elit.Totam!</p>
                  </div>
                  <div className="col-lg-3 col-sm-6 mt-5">
                    <img src={pic4} className="img-thumbnail "/>
                    <h2 className="my-3 text-warning">Project Four</h2>
                    <p className="text-justify text-muted">Lorem ipsum dolor sit ipsum dolor sit amet consectetur ad amet adipisicing elit.Totam!</p>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}
