import React, { Component } from "react";

import AddWardenButton from "./Warden/AddWardenButton";
import AddRoomButton from "./Room/AddRoomButton";
import ViewWardenButton from "./Warden/ViewWardenButton";
import ViewRoomButton from "./Room/ViewRoomButton";
import ViewStudentButton from "./Student/ViewStudentButton";
import AddHostelButton from "./Hostel/AddHostelButton";
import ViewHostelButton from "./Hostel/ViewHostelButton";
import ViewRegistrationButton from "./Registration/ViewRegistrationButton";


class Dashboard extends Component {


  render() {
  
    return (
      <div className="wardens">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center"></h1>
              <br />
              <AddRoomButton />
              <br />
              <hr/>
              <AddWardenButton />
              <br />
              <hr />
              <ViewRoomButton />
            <br/>
            <hr/>
            <ViewWardenButton/>
            <br/>
            <hr/>
            <ViewStudentButton/>
            <br />
              <hr/>
              <AddHostelButton />
              <br />
              <hr/>
              <ViewHostelButton />
              <br />
              <hr/>
              <ViewRegistrationButton />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Dashboard;