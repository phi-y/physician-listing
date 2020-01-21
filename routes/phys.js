var express = require('express');
var router = express.Router();

// Hard code the data
const physicians = [
  { firstName:"John", lastName:"Dorian", email: "john.dorian@um.health", id:1 },
  { firstName:"Christopher", lastName:"Turk", email: "mr.turklton@um.health", id:2 },
  { firstName:"Elliot", lastName:"Reid", email: "elliot.read@private-doctors.com", id:3 },
];

const appointmentMap = {
  '1': [
    { name: 'Todd TheMeister', kind: 'Follow Up', time: '8:00am'},
    { name: 'Carla Espinosa', kind: 'New Patient', time: '10:00am'},
    { name: 'Todd TheMeister', kind: 'Follow Up Again', time: '1:00pm'},
    { name: 'Jordan', kind: 'Follow Up', time: '3:00pm'},
  ],
  '2': [
    { name: 'Todd TheMeister', kind: 'Follow Up', time: '8:00am'},
    { name: 'Carla Espinosa', kind: 'New Patient', time: '10:00am'},
    { name: 'Todd TheMeister', kind: 'Follow Up Again', time: '1:00pm'},
    { name: 'Jordan', kind: 'Follow Up', time: '3:00pm'},
  ],
  '3': [
    { name: 'Todd TheMeister', kind: 'Follow Up', time: '8:00am'},
    { name: 'Carla Espinosa', kind: 'New Patient', time: '10:00am'},
    { name: 'Todd TheMeister', kind: 'Follow Up Again', time: '1:00pm'},
    { name: 'Jordan', kind: 'Follow Up', time: '3:00pm'},
  ]
};


router.get('/', function(req, res, next) {
  res.json(physicians);
});

// RESTful style with id in url
router.get('/:physId/appointments', function(req, res, next) {
  const physId = req.params.physId;
  const appointmentList = appointmentMap[physId];
  res.json(appointmentList);
});

module.exports = router;
