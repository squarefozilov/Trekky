const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true },
  picture: String,
  date: { type: Date, default: Date.now }
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;