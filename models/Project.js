// Project.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Projects
let Project = new Schema({
  name: {
    type: String
  },
  comment: {
    type: String
  },
  user: {
    type: String
  } 
}
,{
    collection: 'projects'
});

module.exports = mongoose.model('Project', Project);