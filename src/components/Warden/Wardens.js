import React, { Component } from "react";
import { connect } from "react-redux";
import { getWardens,deleteWarden } from "../../actions/wardenActions";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


class Wardens extends Component {
  componentDidMount(){
    this.props.getWardens();
  }

  onDeleteClick = (id) => {
    this.props.deleteWarden(id);
  };
  


  render() {
    const { wardens } = this.props.warden;
    return (
      
      <div className="container">
        <div className="card card-body bg-light mb-3">
        <div className="row">
          
          <div className="col-lg-2 col-md-2 col-4">
          <h3>Warden Id</h3>
          </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h3>First Name</h3>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h3>Last Name</h3>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h3>Email</h3>
              
            </div>
            
            <div className="col-lg-4 col-md-6 col-4">
            <h3>Manage Wardens</h3>
        </div>
          </div>
          <hr/>

        {wardens.map(warden => (
      
          <div className="row">
          
          <div className="col-lg-2 col-md-2 col-4">
          <h6>{warden.wardenid}</h6>
          </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h6>{warden.firstName}</h6>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h6>{warden.lastName}</h6>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h6>{warden.email}</h6>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
            <Link to={`/updateWarden/${warden.wardenid}`}>
            <i className="fa fa-edit pr-1">Update</i>
        </Link>
            
          </div>
          
          <div className="col-lg-2 col-md-2 col-4" onClick={this.onDeleteClick.bind(this, warden.wardenid)}>
          <i className="fa fa-minus-circle pr-1"> Delete</i>  
          </div>
          </div>
          ))}
        </div>
      </div>

        
      
    );
  }
}

Wardens.propTypes = {
  warden: PropTypes.object.isRequired,
  getWardens: PropTypes.func.isRequired,
  deleteWarden:PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  warden: state.warden
});

export default connect(
  mapStateToProps,
  {getWardens,deleteWarden}
  ) (Wardens);
