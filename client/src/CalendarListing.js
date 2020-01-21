import React from 'react';


const NoneSelected = () => (<h4>Select a physician on the left to get started</h4>)
const Loading = () => (<h4>Loading....</h4>);

const Appointment = ({a}) => {
  return <tr>
	<td>{a.name}</td>
	<td>{a.kind}</td>
	<td>{a.time}</td>
  </tr>;
}

const PhysicianCalendarListing = ({p,a}) => {
	return <div>
		<div>
			<h3>Dr. {p.firstName} {p.lastName}</h3>
			<h5 className="light">{p.email}</h5>
		</div>
		<div style={{paddingTop:50}}>
			<table>
				<thead>
					<th>Name</th>
					<th>Reason</th>
					<th>Time</th>
				</thead>
				<tbody>
					{a.map(appt => <Appointment a={appt}/>)}
				</tbody>
			</table>
		</div>
	</div>
}

const CalendarListing = ({selectedPhysician, appointments}) => {
	let body = "";
	if (!selectedPhysician) { body = <NoneSelected/>; }
	else if (!appointments) { body = <Loading/>; }
	else { body = <PhysicianCalendarListing p={selectedPhysician} a={appointments}/>; }

	return <div className="Main">
		{body}
	</div>
};

export default CalendarListing;
