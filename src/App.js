import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddHostelRooms from "./components/HostelRooms/AddHostelRooms";
import AddProject from "./components/HostelRooms/AddHostelRooms";
import ProjectItem from "./components/HostelRooms/Rooms";
import Rooms from "./components/HostelRooms/Rooms";
import ViewWardenButton from "./components/Warden/ViewWardenButton";
import AddWarden from "./components/Warden/AddWarden";
import Wardens from "./components/Warden/Wardens";
import Register from "./components/Register/Register";
import { Provider } from  "react-redux";
import store from "./store";




class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/viewHostelRooms" component={Rooms} />
          <Route exact path="/addHostelRooms" component={AddHostelRooms} />
          <Route exact path="/addWarden" component={AddWarden} />
          <Route exact path="/viewWarden" component={Wardens} />
          <Route exact path="/signUp" component={Register} />
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;