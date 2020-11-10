import React, { Component } from "react";


import ViewStudentButton from "./Student/ViewStudentButton";

import RegisterRoomButton from "./Registration/RegisterRoomButton";
import MyProfileButton from "./Student/MyProfileButton";


class StudentDashboard extends Component {


  render() {
  
    return (
      <div className="wardens">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center"></h1>
              <br />
              
              <RegisterRoomButton /> 
              
              <br />
              <hr/>
            <MyProfileButton/>
            
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default StudentDashboard;