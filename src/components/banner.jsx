import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    return (
        <div>
            <br/><br/>
      <section>
          <div className="conatiner-fluid">
              <div className="row bg-info justify-content-center align-items-center" style={{height:'100vh'}}>
                <div className="col-sm-10 text-center">
                    <h1 className="display-2 text-capitalize"> <span className="text-warning">Pure Bootstrap <br/><span className="text-white"> website</span></span>  </h1>
                    <h2 className="font-weight-light font-italic text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <a href="" className="btn btn-warning btn-large px-4 m-3">Press here</a>
                <a href="" className="btn btn-danger btn-large px-4 m-3">Press here</a>
                </div>
              </div>
          </div>
      </section>
      </div>
    );
  }
}
