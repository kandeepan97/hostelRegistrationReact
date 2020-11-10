import React, { Component } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import {createNewStudent} from "../../actions/securityActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";

class Register extends Component {

    constructor(){
        super();

        this.state = {
            studentid:"",
            firstName:"",
            lastName:"",
            email:"",
            address:"",
            mobileNumber:"",
            department:"",
            faculty:"",
            year:"",
            gender:"",
            password:"",
            confirmPassword:"",
            errors:{}              
        }
      this.onChange = this.onChange.bind(this);
      this.onSubmit= this.onSubmit.bind(this);  
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }


    onSubmit(e){
        e.preventDefault();
        const newStudent = {
            studentid:this.state.studentid,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            address:this.state.address,
            mobileNumber:this.state.mobileNumber,
            department:this.state.department,
            faculty:this.state.faculty,
            year:this.state.year,
            gender:this.state.gender,
            password:this.state.password,
            confirmPassword:this.state.confirmPassword
        }
        this.props.createNewStudent(newStudent,this.props.history);
    }



    onChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Register</h1>
              <p className="lead text-center">Create your Account</p>
              <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.firstName
                      })}
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.onChange}
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
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
                    placeholder="Student Id"
                    name="studentid"
                    value={this.state.studentid}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Mobile Number"
                    name="mobileNumber"
                    value={this.state.mobileNumber}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                <select name='faculty' value={this.state.faculty} onChange={this.onChange} className="form-control form-control-lg">
                <option value='0'>Faculty</option>
                <option value='agri'>Agricultural Sciences</option>
                <option value='applied'>Applied Sciences</option>
                <option value='geo'>Geomatics</option>
                <option value='management'>Management Studies</option>
                <option value='medicine'>Medicine</option>
                <option value='social'>Social Sciences & languages</option>
                <option value='technology'>Technology</option>
              </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Department"
                    name="department"
                    value={this.state.department}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Address"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                <select name='year' value={this.state.year} onChange={this.onChange} className="form-control form-control-lg">
                <option value='0'>Year</option>
                <option value='1st'>1st Year</option>
                <option value='2nd'>2nd Year</option>
                <option value='3rd'>3rd Year</option>
                <option value='4th'>4th Year</option>
              </select>
                </div>

                <div className="form-group">
                <select name='gender' value={this.state.gender} onChange={this.onChange} className="form-control form-control-lg">
                <option value='0'>Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                  />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
    createNewStudent: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
    errors: state.errors
});

export default connect (mapStateToProps,{createNewStudent})(Register);