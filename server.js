require('dotenv').config("./.env")
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();
const PORT = process.env.PORT || 3001;
const Users = require('./model/Users')
const jwt = require('jsonwebtoken')
process.env.SECRET_KEY = 'secret';

// Remember to npm install all this after testing routes.

// Defining middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname ,"client/build")));


// Set up mongoose locally and for mLab.
const MONGODB_URL = "mongodb://localhost/project_db" || process.env.MONGODB_URI;
mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

var db = mongoose.connection;
db.once("open", () => {console.log('Connected')});
db.on("error", function(err){
console.log(err);
});

app.get("/add/user", function(){
    Users.find({} ,function(err, data){
        if(err) {console.log(err)}

        console.log(data)
        res.json(data)
    })
})
var Userspass = require('./routes/Users')

app.use('/', Userspass)
// This route posts the saved books to the database.
app.post("/add/user", function(req, res) {
    const User = new Users({
        id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email:req.body.email,
        picture:req.body.picture
    });
    
    User.save(function(err,user){
        if (err) {console.log(err)}
        console.log(user.name , " was just added to the database")
        
        Users.find({}, function(err, data){
            if(err){console.log(err)}
            res.json(data)
        })
    })
    
    
});

app.post('/register', (req, res) => {
    console.log("connectin")
    const today = new Date()
    const userData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      created: today
    }
  
    Users.findOne({
      email: req.body.email
    })
      .then(user => {
        if (!user) {
            
            //console.log(userData);
            userData.password = req.body.password
            Users.create(userData)
              .then(user => {
                res.json({ status: user.email + 'Registered!' + userData})
              })
              .catch(err => {
                res.send('error: ' + err)
              })
        } else {
          res.json({ error: 'User already exists' })
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })
// This route queiries all books currently saved in the books database.
app.get("/api", (req, res) => {
    Users.find({}).then((result) => {
        res.send(result);
    })
    
});

app.post('/login', (req, res) => {
  res.send("UserAbbosjon")
    Users.findOne({
      email: req.body.email})
    })
app.get("/api/crime", (req, res) => {
    CrimeLocations.find({}).then((result) => {
        res.json(result);
    })
})

app.post("/api/crime", (req, res) => {
    const CrimeLocation = new CrimeLocations({
        id: new mongoose.Types.ObjectId(),
        latitude: req.body.latitude,
        longitude: req.body.longitude
    })
      .then(user => {
        if (user) {
            // Passwords match
            const payload = {
              _id: user._id,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email
            }
            let token = jwt.sign(payload, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.send(token)
          
        } else {
          res.json({ error: 'User does not exist' })
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })


  app.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  
    Users.findOne({
      _id: decoded._id
    })
      .then(user => {
        if (user) {
          res.json(user)
        } else {
          res.send('User does not exist')
        }
      })
      .catch(err => {
        console.log("fdsdfs")
        res.send('error: ' + err)
      })
  })
// This route deletes the saved books in the database.
app.delete("/delete/:id", (req, res) => {
    let userId = req.params.id;
    Users.findByIdAndDelete({_id:userId})
    .then((res) => {
        console.log(res)
        .catch((err) => {console.log(err)})
        
    });
    res.end();
});

app.get("/apikey", (req,res) => {
    res.json(process.env.APIkey)
});

// Send every other request to the react app.
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
    console.log(`===> API server now on port ${PORT}!`);
})