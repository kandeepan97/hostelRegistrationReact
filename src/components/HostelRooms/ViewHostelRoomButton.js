import React from "react";
import { Link } from "react-router-dom";

const ViewHostelRoomButton = () => {
  return (
    <React.Fragment>
      <Link to="/viewHostelRooms" className="btn btn-lg btn-info">
        View Hostel Rooms
      </Link>
    </React.Fragment>
  );
};

export default ViewHostelRoomButton;