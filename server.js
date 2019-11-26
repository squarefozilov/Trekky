require('dotenv').config
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();
const PORT = process.env.PORT || 3001;
const Users = require('./models/Users')

// Remember to npm install all this after testing routes.

// Defining middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// Set up mongoose locally and for mLab.
const MONGODB_URL = "mongodb://localhost/project_db" || process.env.MONGODB_URI;
mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

var db = mongoose.connection;
db.once("open", () => {console.log('Connected')});
db.on("error", function(err){
    console.log(err);
});

// This route directs the user to the homepage.
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/project3/public/index.html"));
    
});

// This route posts the saved books to the database.
app.post("/add/user", function(req, res) {
    const User = new Users({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        info:req.body.info
    });
    // save() stores the saved book to the book_search database.
    // .then() console logs the result of the operation of saving.
    // .catch() logs any errors in the process of saving to the database.
    User.save()
    .then((result) => {
        console.log(result);
        res.json(result)
    })
    .catch(err => {console.log(err);})

    console.log("this route is still being hit!");
    
});

// This route queiries all books currently saved in the books database.
app.get("/api", (req, res) => {
    Users.find({}).then((result) => {
        res.send(result);
    })
    
});

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

// Send every other request to the react app.
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
    console.log(`===> API server now on port ${PORT}!`);
})
