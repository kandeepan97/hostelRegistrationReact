import React, { Component } from "react";

class AddHostelRooms extends Component {
  constructor() {
    super();

    this.state = {
      roomName: "",
      roomId: "",
      numberOfBeds: "",
      hostelType:"",
      floorNumber:""

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newProject = {
      roomName: this.state.roomName,
      roomId: this.state.roomId,
      numberOfBeds: this.state.numberOfBeds,
      hostelType:this.state.hostelType,
      floorNumber:this.state.floorNumber
    };

    console.log(newProject);
  }

  render() {
    return (
      <div>
        {
          //check name attribute input fields
          //create constructor
          //set state
          //set value on input fields
          //create onChange function
          //set onChange on each input field
          //bind on constructor
          //check state change in the react extension
        }

        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create Hostel Rooms </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Room Id"
                      name="roomId"
                      value={this.state.roomId}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Hostel ID"
                      name="hostelId"
                      value={this.state.hostelId}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                    type="text"
                      className="form-control form-control-lg"
                      placeholder="NumberOfBeds"
                      name="numberOfBeds"
                      value={this.state.numberOfBeds}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                    type="text"
                      className="form-control form-control-lg"
                      placeholder="Floor Number"
                      name="floorNumber"
                      value={this.state.floorNumber}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                    type="text"
                      className="form-control form-control-lg"
                      placeholder="Hosteltype"
                      name="hostelType"
                      value={this.state.hostelType}
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

export default AddHostelRooms;