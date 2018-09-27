'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CatSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name'
  }
});

module.exports = mongoose.model('Cats', CatSchema);
