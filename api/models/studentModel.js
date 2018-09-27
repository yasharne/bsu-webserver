'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  id: {
    type: Number,
    required: 'Enter the ID'
  },
  gender: {
    type: String,
    required: 'Enter the gender'
  },
  firstname:{
    type: String,
    required: 'Enter the firstname'
  }
  ,
  lastname: {
    type: String,
    required: 'Enter the lastname'
  }
});

module.exports = mongoose.model('Students', StudentSchema);
