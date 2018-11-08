import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">React Test</h1>
                <p className="lead">
                  {" "}
                  A website API and front end showing product items and product
                  details using react and nodejs.
                </p>
                <hr />
                <Link to="/register" className="btn btn-md btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-md btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
