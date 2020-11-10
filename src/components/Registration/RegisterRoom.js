import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types"; 
import { connect } from "react-redux";
import { registerRoom } from "../../actions/registrationActions";
import axios from "axios";

class RegisterRoom extends Component {
  constructor() {
    super();

    this.state = {
      hostelName: "",
      roomid: "",
      bedId:"",
      paymentId:"",

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //life cycle hooks
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors:nextProps.errors});
    }

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const myRoom = {
      roomid: this.state.roomid,
      hostelName: this.state.hostelName,
      bedNumber:this.state.bedNumber,
      paymentId:this.state.paymentId
    };
    this.props.registerRoom(myRoom, this.props.history);
    console.log(myRoom);
  }

  render() {
    return (
      <div>
        {
          
        }

        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Register My Room </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Hostel Name"
                      name="hostelName"
                      value={this.state.hostelName}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Room Id"
                      name="roomid"
                      value={this.state.roomid}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Bed Number"
                      name="bedNumber"
                      value={this.state.bedNumber}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Payment Id"
                      name="paymentId"
                      value={this.state.paymentId}
                      onChange={this.onChange}
                    />
                  </div>
                  
            
                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RegisterRoom.propTypes = {
  registerRoom: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});


export default connect(
  mapStateToProps,
  {registerRoom}
)(RegisterRoom);