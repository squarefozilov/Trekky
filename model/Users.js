const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true },
  picture: String,
  date: { type: Date, default: Date.now },
  first_name: { type: String },
  last_name: {  type: String },
  password: { type: String, required: true }
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;