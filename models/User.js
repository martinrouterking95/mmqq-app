// User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for User
let User = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  login_name: {
    type: String
  },
  password: {
    type: String
  }
}
,{
    collection: 'users'
});

module.exports = mongoose.model('User', User);