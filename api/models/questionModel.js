'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  // id: {
  //   type: Number,
  //   required: 'Enter the ID'
  // },
  question: {
    type: String,
    required: 'Enter the question'
  },
  answers:{
    type: Object,
    required: 'Enter possible answers'
  }
  ,
  answer: {
    type: String,
    required: 'Enter the answer (a, b, c, d)'
  },
  score: {
    type: Number,
    required: 'Enter the score of the question'
  }
});

module.exports = mongoose.model('Questions', QuestionSchema);
