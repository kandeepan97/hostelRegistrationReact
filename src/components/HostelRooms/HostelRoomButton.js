import React from "react";
import { Link } from "react-router-dom";

const HostelRoomButton = () => {
  return (
    <React.Fragment>
      <Link to="/addHostelRooms" className="btn btn-lg btn-info">
        Add Hostel Rooms
      </Link>
    </React.Fragment>
  );
};

export default HostelRoomButton;