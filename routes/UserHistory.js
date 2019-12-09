const express = require('express')
const Userhistory = express.Router()
const cors = require('cors')

const History = require('../models/Userhistory');
Userhistory.use(cors())

Userhistory.post('/addHistory', (req, res) => {
  const today = new Date()
  const userData = {
   // userid : req.body,,
    email: req.body.email,
    userid: req.body.userid,
    fromlocation : req.body.fromlocation,
    tolocation : req.body.tolocation,
  }
  History.create(userData)
  .then(user => {
    res.json({ status: user + 'Registered!' })
  })
  .catch(err => {
    res.send('error: ' + err)
  })
})
 

Userhistory.get("/usersearches/:id", function(req, res) {
      console.log(req.params.id);
     let userId =  req.params.id.toString();
    //db.places.find({"continent": "Africa"})  
    History.find({"userid" : ""+userId+"" }, function(err, data){
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
    
  });
module.exports = Userhistory;
