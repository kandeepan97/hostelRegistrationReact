import React, { Component } from "react";


import ViewStudentButton from "./Student/ViewStudentButton";

import ViewRoomButton from "./Room/ViewRoomButton";

import ViewHostelButton from "./Hostel/ViewHostelButton";
import AddRoomButton from "./Room/AddRoomButton";
import AddHostelButton from "./Hostel/AddHostelButton";




class WardenDashboard extends Component {


  render() {
  
    return (
      <div className="wardens">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center"></h1>
              <br />
              
              <AddHostelButton /> 
              
              <br />
              <hr/>
            
            <ViewHostelButton/>
              <br />
              <hr/>
              <AddRoomButton/>
              <br />
              <hr/>
              <ViewRoomButton/>
              <br />
              <hr/>
              <ViewStudentButton/>
              <br />
              <hr/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default WardenDashboard;