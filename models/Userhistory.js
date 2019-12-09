const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserHistory = new Schema({
  email: {
    type: String,
    required: true
  },
  userid : {
    type: String
  },
  fromlocation : {
    type: String
  },

  tolocation : {
      type : String,
      required : true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model('usersearches', UserHistory)
