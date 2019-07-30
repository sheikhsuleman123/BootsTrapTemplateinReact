import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-md navbar-light bg-dark fixed-top"> 
        <a href="#" className="navbar-brand">
        <i className="fa fa-child text-warning fa-2x"> </i></a>
        <button type="button" className="navbar-toggler bg-light" data-toggle="collapse" data-target="#nav">
            <span className="navbar-toggler-icon"> </span> </button>
    <div className="collapse navbar-collapse justify-content-between" id="nav">
        <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link text-light text-uppercase px-3" href="#">Home</a> </li>
            <li className="nav-item">
                <a className="nav-link text-light text-uppercase px-3" href="#">Skills</a> </li>
            <li className="nav-item dropdown" data-toggle="dropdown">
                <a className="nav-link text-light 
                text-uppercase px-3 dropdown-toggle " href="#">Projects</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="">Web</a>
                    <a className="dropdown-item" href="">Android</a>
                    <a className="dropdown-item" href="">IOS</a>
                    <a className="dropdown-item" href="">Hardware</a>
                </div>
                 </li>
            <li className="nav-item">
                <a className="nav-link text-light text-uppercase px-3" href="#">Team</a> </li>
            <li className="nav-item">
                <a className="nav-link text-light text-uppercase px-3" href="#">Contacts</a> </li>
        </ul>

        <form className="form-inline ml-3">
            <div className="input-group ">
                <input type="text" placeholder="Search" className="form-control" />
                    <div className="input-group-append"> <button type="button" className="btn bg-light">
                <i className="fa fa-search text-muted"> </i> </button>
                    </div>
            </div>
        </form>
</div>

      </nav>
      
      </div>
    );
  }
}
