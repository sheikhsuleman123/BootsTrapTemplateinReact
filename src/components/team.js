import React, { Component } from 'react';

import pic1 from '../images/kid1.jpg';
import pic2 from '../images/kid2.jpg';
import pic3 from '../images/kid3.jpg';

export default class Team extends Component {
  render() {
    return (
      <section className=" p-2 bg-secondary">
            <div className="container-fluid">
               
                <div className="row">
                    <div className="col text-center mb-3">
                        <h1 className="text-warning display-2"> Team </h1>
                        <p className="lead text-light"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto fugit reprehenderit animi sit aspernatur optio, delectus culpa placeat pariatur! Excepturi aliquid rerum corrupti fuga natus a quos iusto quisquam eum.                      </p>
                    </div>
                </div>
           
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={pic1} className="card-img-top" />
                        </div>
                    </div>
                </div>

            </div>
      </section>
    );
  }
}
