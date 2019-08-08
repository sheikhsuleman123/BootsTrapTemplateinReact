import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <section className="p-5 light">
          <div className="container-fluid">
              
              <div className="row">
                  <div className="col text-center mb-3">
                    <h1 className="text-warning display-2"> Contact </h1>
                    <p className="lead text-secondary"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, ea aut recusandae commodi dignissimos cumque id maiores placeat quam, culpa, sed natus omnis? Saepe ipsa velit enim nemo officiis mollitia.</p>
                  </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                    <div className="text-center text-secondary">
                    <h2>Got Question ?</h2>
                    <p>Stay Connect</p>
                    </div>
                    <form className="text-muted">
                       
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name"/>
                        </div>
                       
                        <div className="form-group ">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="name"/>
                        </div>
                       
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control mb-3" name="" id="" cols="3" ></textarea>
                            <button className="btn btn-outline-warning btn-block"> Submit Question </button>
                        </div>
                    </form>
                </div>
              </div>
          </div>
      </section>
    );
  }
}
