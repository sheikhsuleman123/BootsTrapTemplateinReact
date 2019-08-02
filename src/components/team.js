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
                            <div className="card-body">
                                <div className="card-title">
                                    <h3 className="text-muted">Micheal</h3>
                                </div>
                                <div className="card-subtitle">
                                    <div className="lead text-secondary ">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, et. Harum quam placeat eveniet ipsam sapiente adipisci cupiditate, voluptatum cum ut. Perspiciatis quos dolorem iste similique repellat. Laudantium, necessi.<b style={{fontWeight: 'bold',}}> "Suleman"</b></p>
                                    </div>
                                    <div className="text-right">
                                        <a href="#"><i className="fa fa-facebook mx-2 fa-2x"></i></a>
                                        <a href="#"><i className="fa fa-twitter text-info fa-2x"></i></a>
                                        <a href="#"><i className="fa fa-youtube text-danger mx-2 fa-2x"></i></a>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={pic2} className="card-img-top" />
                            <div className="card-body">
                                <div className="card-title">
                                    <h3 className="text-muted">Hamza</h3>
                                </div>
                                <div className="card-subtitle">
                                    <div className="lead text-secondary ">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, et. Harum quam placeat eveniet ipsam sapiente adipisci cupiditate, voluptatum cum ut. Perspiciatis quos dolorem iste similique repellat. Laudantium necessi.</p>
                                    </div>
                                    <div className="text-right">
                                        <a href="#"><i className="fa fa-facebook mx-2 fa-2x"></i></a>
                                        <a href="#"><i className="fa fa-twitter text-info fa-2x"></i></a>
                                        <a href="#"><i className="fa fa-youtube text-danger mx-2 fa-2x"></i></a>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={pic3} className="card-img-top" />
                            <div className="card-body">
                                <div className="card-title">
                                    <h3 className="text-muted text-center">Hassan</h3>
                                </div>
                                <div className="card-subtitle">
                                    <div className="lead text-secondary ">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, et. Harum quam placeat eveniet ipsam sapiente adipisci cupiditate, voluptatum cum ut. Perspiciatis quos dolorem iste similique repellat. Laudantium, necessi.<b style={{fontWeight: 'bold',}}> "Suleman"</b></p>
                                    </div>
                                    <div className="text-right">
                                        <a href="#"><i className="fa fa-facebook mx-2 fa-2x"></i></a>
                                        <a href="#"><i className="fa fa-twitter text-info fa-2x"></i></a>
                                        <a href="#"><i className="fa fa-youtube text-danger mx-2 fa-2x"></i></a>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>

            </div>
      </section>
    );
  }
}
