// AdUnit.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let AdUnit = new Schema({
  save_name: {
    type: String
  },
  result_final: {
    type: Number
  },
  result_1: {
    type: Number
  },
  result_2: {
    type: Number
  }, 
  result_3: {
    type: Number
  },
  value_array:{
    type: Array
  },
  project:{
    type: String
  },
  user:{
    type: String
  }
}
,{
    collection: 'adunits'
});

module.exports = mongoose.model('AdUnit', AdUnit);