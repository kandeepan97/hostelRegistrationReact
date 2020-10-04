import React, { Component } from "react";
import ProjectItem from "./HostelRooms/Rooms";
import HostelRoomButton from "./HostelRooms/HostelRoomButton";
import AddWardenButton from "./Warden/AddWardenButton";
import ViewWardenButton from "./Warden/ViewWardenButton";
import ViewHostelRoomButton from "./HostelRooms/ViewHostelRoomButton";

class Dashboard extends Component {
  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center"></h1>
              <br />
              <HostelRoomButton />
              <br />
              <hr/>
              <AddWardenButton />
              <br />
              <hr />
              <ViewHostelRoomButton />
            <br/>
            <hr/>
            <ViewWardenButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;