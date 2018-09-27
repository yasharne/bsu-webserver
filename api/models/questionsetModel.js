'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionsetSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name'
  },
  category: {
    type: String,
    required: 'Enter the category'
  },
  questions: Object
});

module.exports = mongoose.model('Questionsets', questionsetSchema);
