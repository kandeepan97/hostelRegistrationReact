import React, { Component } from "react";
import { connect } from "react-redux";
import { getRegistrations } from "../../actions/registrationActions";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


class Registrations extends Component {
  componentDidMount(){
    this.props.getRegistrations();
  }
  render() {
    const { registrations } = this.props.registration;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">

          <div className="col-lg-2 col-md-2 col-4">
          <h3>Reg Id</h3>
          </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h3>Room Id</h3>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h3>Student Id</h3>
              
            </div>
            <div className="col-lg-6 col-md-2 col-4">
              <h3>Manage Regisrations</h3>
              
            </div>
            </div>
            <hr/>

            {registrations.map(registration => (

              <div className="row">
          <div className="col-lg-2 col-md-2 col-4">
          <h6>{registration.registrationid}</h6>
          </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h6>{registration.roomId}</h6>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h6>{registration.studentId}</h6>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
            <a herf="">
            <i className="fa fa-edit pr-1"> View Full Info</i>
        </a>
     
        </div>
    
          </div>
            ))}
        </div>
      </div>

    );
  }
}


  Registrations.propTypes = {
    registration: PropTypes.object.isRequired,
    getRegistrations: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    registration: state.registration
  });
  
  export default connect(
    mapStateToProps,
    {getRegistrations}
    ) (Registrations);
  