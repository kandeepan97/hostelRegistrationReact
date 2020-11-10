import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">
                  Hostel Registration System  
                </h1>
                <h3 className="display-7 mb-2">
                Sabaragamuwa University Of SriLanka
                </h3>
                <hr/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3 className="display-5 mb-4">
                  Create your account to Register Your Rooms
                </h3>
                
                <Link className="btn btn-lg btn-primary mr-2" to="/register">
                  Sign Up
                </Link>
                <Link className="btn btn-lg btn-secondary mr-2" to="/login">
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