import React, { Component } from "react";

class Rooms extends Component {
  render() {
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
          <div className="col-lg-2 col-md-2 col-4">
          <h3>Hostel Id</h3>
          </div>
            <div className="col-lg-6 col-md-2 col-4">
              <h3>Room Id</h3>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
            <a href="#">
            <i className="fa fa-edit pr-1"> Update Hostel Rooms Info</i>
        </a>
            
          </div>
          <div className="col-lg-2 col-md-2 col-4">
          <a href="">
          <i className="fa fa-minus-circle pr-1"> Delete Hostel Rooms</i>  
      </a>
          
        </div>
    
          </div>
        </div>
      </div>
    );
  }
}

export default Rooms;