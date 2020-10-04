import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types"; 
import { connect } from "react-redux";
import { createWarden } from "../../actions/wardenActions";
import axios from "axios";



class AddWarden extends Component {
  constructor() {
    super()

    this.state = {
      firstName: "",
      wardenId: "",
      phoneNumber: "",
      email:"",
      lastName:"",
      hostelId:"",
      password:"",
      erorrs: {}

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
  componentDidMount(){
    const apiCall = async () => {
      
    const res = await axios.post("http://localhost:8080/api/warden", {
      wardenId:1
    });
    }
    apicall ();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
 
    const newWarden = {
      firstName: this.state.firstName,
      wardenId: this.state.wardenId,
      phoneNumber: this.state.phoneNumber,
      email:this.state.email,
      lastName:this.state.lastName,
      hostelId:this.state.hostelId,
      password:this.state.password
    };
    console.log(newWarden);
   
  }

  render() {
    const { errors} = this.state;


    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Add Warden </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Warden Id"
                      name="wardenId"
                      value={this.state.wardenId}
                      onChange={this.onChange}
                    />
               
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="First Name"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.onChange}
                    />
                   
                  </div>
                  <div className="form-group">
                    <input
                    type="text"
                      className="form-control form-control-lg"
                      placeholder="Last Name"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.onChange}
                    />
                 
                  </div>
                  <div className="form-group">
                    <input
                    type="text"
                      className="form-control form-control-lg"
                      placeholder="phoneNumber"
                      name="phoneNumber"
                      value={this.state.phoneNumber}
                      onChange={this.onChange}
                    />
                
                  </div>
                  
                  <div className="form-group">
                    <input
                    type="email"
                      className="form-control form-control-lg"
                      placeholder="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                   
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Hostel Id"
                      name="hostelId"
                      value={this.state.hostelId}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg "
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
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

AddWarden.propTypes = {
  createWarden: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {createWarden}
  )(AddWarden);

