import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
    <footer className="bg-secondary">
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1 className="text-white p-3 font-weight-light">    Pure Bootstrap Project </h1>
                 <h3 className="text-light font-weight-light font-italic mb-3">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, ut!  </h3>
                <div className="p-2">
                  <a href=""> <i className="fa fa-facebook fa-2x text-primary mx-3"> </i></a>
                  <a href=""> <i className="fa fa-google-plus fa-2x text-danger mx-3"> </i></a>
                  <a href=""> <i className="fa fa-twitter fa-2x text-info mx-3"> </i></a>
                  <a href=""> <i className="fa fa-youtube fa-2x text-danger mx-3"> </i></a>    
                </div>
                <p className="text-light py-4 m-0">&copy;Copyright 2019 - Made by Sheikh Suleman</p>
                </div>
            </div>
        </div>
    </footer>
    );
  }
}
