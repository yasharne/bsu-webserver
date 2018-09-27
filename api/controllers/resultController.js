'use strict';

var mongoose = require('mongoose'),
  Result = mongoose.model('Results');

exports.list_all_results = function(req, res) {
  Questionset.find({}, function(err, question) {
    if (err)
      res.send(err);
    res.json(question);
  });
};

// exports.get_a_questionset = function(req, res) {
//   Questionset.findById(req.params.questionsetId, function(err, questionset) {
//     if (err)
//       res.send(err);
//     res.json(questionset);
//   });
// };
//
// exports.update_a_questionset = function(req, res) {
//   Questionset.update({_id: req.params.questionsetId}, {$push: {questions: req.body}}, function(err, question){
//     if (err) {
//       console.error('Error: ' + err);
//     }
//     console.error('question: ' + question);
//   });
// };
