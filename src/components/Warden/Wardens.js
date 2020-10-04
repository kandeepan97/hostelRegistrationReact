import React, { Component } from "react";

class Wardens extends Component {
  render() {
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
          <div className="col-lg-2 col-md-2 col-4">
          <h3>Warden Id</h3>
          </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h3>First Name</h3>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h3>Last Name</h3>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h3>Email</h3>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
            <a href="#">
            <i className="fa fa-edit pr-1"> Update Warden Info</i>
        </a>
            
          </div>
          <div className="col-lg-2 col-md-2 col-4">
          <a href="">
          <i className="fa fa-minus-circle pr-1"> Delete Warden</i>  
      </a>
          
        </div>
    
          </div>
        </div>
      </div>
    );
  }
}

export default Wardens;