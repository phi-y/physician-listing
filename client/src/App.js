import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loading from './Loading';

import PhysicianSideBar from './PhysicianSideBar';
import CalendarListing from './CalendarListing';

/* Simple state management in top level container */
class App extends Component {
  state = {
    loading: false,
    physicians: null,
    selectedPhysician: null,
    appointments: null
  }
  
  setCalendarListing = selectedPhysician => {
    this.setState({selectedPhysician, appointments: null}, this.retrieveAppointments);
  }

  retrieveAppointments = () => {
    fetch(`/physicians/${this.state.selectedPhysician.id}/appointments`)
    .then(res => res.json())
    .then(appointments => {
      this.setState({appointments});
    })
    .catch(err => {
      console.log(err);
      alert(err.toString());
    });
  }

  // Kick off the load
  componentDidMount = () => this.retrievePhysicians();

  retrievePhysicians = () => {
    fetch('/physicians')
    .then(res => res.json())
    .then(physicians => {
      this.setState({physicians});
    })
    .catch(err => {
      console.log(err);
      alert(err.toString());
    });
  }

  render() {
    if (this.state.loading) {
      return <Loading/>;
    }
    return (
      <div className="grid-container">
	<PhysicianSideBar physicians={this.state.physicians} setCalendarListing={this.setCalendarListing}/>
	<CalendarListing selectedPhysician={this.state.selectedPhysician} appointments={this.state.appointments}/>
      </div>
    );
  }
}

export default App;
