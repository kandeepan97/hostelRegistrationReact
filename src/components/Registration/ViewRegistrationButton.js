import React from "react";
import { Link } from "react-router-dom";

const ViewRegistrationButton = () => {
  return (
    <React.Fragment>
      <Link to="/viewRegistration" className="btn btn-lg btn-info">
        View Registration
      </Link>
    </React.Fragment>
  );
};

export default ViewRegistrationButton;