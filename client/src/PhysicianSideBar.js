import React from 'react';


const Physician = ({physician, setCalendarListing}) => {
	const clickHandler = e => setCalendarListing(physician);
	const style = {
		marginTop:10,
		marginBottom: 10,
		padding: 5
	}
	return <div className="lightGreyHover" style={style} onClick={clickHandler}>
                 {physician.lastName}, {physician.firstName}
               </div>;
};

const PhysicianSideBar = ({physicians, setCalendarListing}) => {
	const finalList = physicians || [];

	return <div className="SideBar">
		<div style={{
			marginTop:15,
			textAlign: 'center'
		}}>
		<h2 style={{display:"inline"}}>Physlist</h2>
		</div>
		<div style={{
			marginTop:15,
			marginLeft: 25,
			marginRight: 25,
			paddingLeft: 25,
			textDecoration: 'underline',
			borderBottom: '1px solid white'
		}}>
		<h4 style={{display:"inline"}}>Physicians</h4>
		</div>
		<div style={{
			marginTop:15,
			marginLeft: 20,
			marginRight: 25,
			paddingLeft: 25,
		}}>
			{ finalList.map( (p,k) => <Physician physician={p} key={k} setCalendarListing={setCalendarListing} /> )}
		</div>
	</div>
}

export default PhysicianSideBar;
