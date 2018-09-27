'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
  s_id: {
    type: String,
    required: 'Enter the s_id'
  },
  q_id: {
    type: String,
    required: 'Enter the q_id'
  },
  answer:{
    type: String,
    required: 'Enter the answer'
  }
  ,
  score: {
    type: String,
    required: 'Enter the score'
  }
});

module.exports = mongoose.model('Answers', AnswerSchema);
