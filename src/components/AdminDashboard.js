import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ViewWardenButton from "./Warden/ViewWardenButton";
import Wardens from "../components/Warden/Wardens";
import AddWardenButton from "./Warden/AddWardenButton";
import UpdateAdminButton from "./Admin/UpdateAdminButton";


class AdminDashboard extends Component {


  render() {
  
    return (
      <div className="wardens">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center"></h1>
              <br />
              
              <AddWardenButton /> 

              
              <UpdateAdminButton/>
              
              <br />
              <hr/>
              <Wardens/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default AdminDashboard;