import React, { Component } from 'react';

export default class Skills extends Component {
  render() {
    return (
      <section className="bg-light p-5">
          <div className="container-fluid">

            <div className="row">
                <div className="col text-center mb-3">
                    <h1 className="text-warning display-2">Skills</h1>
                    <p className="lead text-secoundary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam?</p>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-lg-4 col-sm-10 mx-auto mb-5">
                    <i className="fa fa-desktop fa-5x text-warning mb-3"> </i>
                    <h1 className="text-secoundary">Development</h1>
                    <p className="lead text-muted my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis assumenda ullam amet modi nostrum laudantium!
                 Ipsum distinctio reprehenderit quo suscipit quis
               magnam quaerat hic nemo modi? Maxime architecto saepe dignissimos!</p>
                <a href="" className="btn btn-outline-warning">Learn more</a>
                </div>
                <div className="col-lg-4 col-sm-10 mx-auto mb-5">
                    <i className="fa fa-edit fa-5x text-warning mb-3"> </i>
                    <h1 className="text-secoundary">Design</h1>
                    <p className="lead text-muted my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis assumenda ullam amet modi nostrum laudantium!
                 Ipsum distinctio reprehenderit quo suscipit quis
               magnam quaerat hic nemo modi? Maxime architecto saepe dignissimos!</p>
                <a href="" className="btn btn-outline-warning">Learn more</a>
                </div>
                <div className="col-lg-4 col-sm-10 mx-auto mb-5">
                    <i className="fa fa-cogs fa-5x text-warning mb-3"> </i>
                    <h1 className="text-secoundary">Creativity</h1>
                    <p className="lead text-muted my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis assumenda ullam amet modi nostrum laudantium!
                 Ipsum distinctio reprehenderit quo suscipit quis
               magnam quaerat hic nemo modi? Maxime architecto saepe dignissimos!</p>
                <a href="" className="btn btn-outline-warning">Learn more</a>
                </div>
               
            </div>
          </div>
      </section>
    );
  }
}
