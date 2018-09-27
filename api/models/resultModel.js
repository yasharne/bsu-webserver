'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resultSchema = new Schema({
  s_id: Schema.Types.ObjectId,
  q_id: Schema.Types.ObjectId,
  timestamp:  Number,
  category: String,
  score:  Number,
  answers:Object
});

module.exports = mongoose.model('Results', resultSchema);
