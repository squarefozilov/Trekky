require('dotenv').config(".env")
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();
const PORT = process.env.PORT || 3001;
const Users = require('./model/Users');
const CrimeLocations = require ('./model/CrimeLocations');
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

// This route queiries all books currently saved in the books database.
app.get("/api", (req, res) => {
    Users.find({}).then((result) => {
        res.send(result);
    })
    
});

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
    axios.get("https://data.cityofnewyork.us/resource/uip8-fykc.json").then(function(response){

        // console.log(response.data);

        for (let i = 0; i < 10; i++){
            let results = {};

            let latitude = response.data[i].latitude;
            let longitude = response.data[i].longitude;

            results.latitude = latitude;
            results.longitude = longitude;
            CrimeLocations.create(results).then(function(dbCrime){
                console.log(dbCrime);
            }).catch(function(err){
                console.log(err);
            })
        }
    
        // res.json(results);
        
    }).catch(function(err){
        if (err) throw err;
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
    res.json(process.env.REACT_APP_APIkey)
});

// Send every other request to the react app.
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
    console.log(`===> API server now on port ${PORT}!`);
})
