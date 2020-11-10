import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudents } from "../../actions/studentActions";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {deleteStudent} from "../../actions/studentActions";


class Students extends Component {
  componentDidMount(){
    this.props.getStudents();
  };

onDeleteClick = (id) => {
  this.props.deleteStudent(id,this.props.history);
};

  render() {
    const { students } = this.props.student;
    console.log(students);
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
        <div className="row">
          
          <div className="col-lg-2 col-md-2 col-4">
          <h3>Student Id</h3>
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
            
            <div className="col-lg-3 col-md-2 col-4">
            <h3>Manage Students</h3>
        </div>
          </div>
          <hr/>

        {students.map(student => (
      
          <div className="row">
          
          <div className="col-lg-2 col-md-2 col-4">
          <h6>{student.studentid}</h6>
          </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h6>{student.firstName}</h6>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h6>{student.lastName}</h6>
              
            </div>
            <div className="col-lg-2 col-md-2 col-4">
              <h6>{student.email}</h6>
            </div>

            <div className="col-lg-2 col-md-2 col-4">
            <Link to={`/updateStudent/${student.studentid}`}>
            <i className="fa fa-edit pr-1"> Update</i>
           </Link>
            </div>

          <div className="col-lg-2 col-md-2 col-4" onClick={this.onDeleteClick.bind(this, student.studentid)}>
          <i className="fa fa-minus-circle pr-1"> Delete</i>   
        </div>
          </div>

          ))}
        </div>
      </div>

        
      
    );
  }
}

Students.propTypes = {
  student: PropTypes.object.isRequired,
  getStudents: PropTypes.func.isRequired,
  deleteStudent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  student: state.student
});

export default connect(
  mapStateToProps,
  {getStudents,deleteStudent}
  ) (Students);
