'use strict';

var mongoose = require('mongoose'),
  Questionset = mongoose.model('Questionsets');

exports.list_all_questionsets = function(req, res) {
  Questionset.find({}, function(err, question) {
    if (err)
      res.send(err);
    res.json(question);
  });
};

exports.create_a_questionset = function(req, res) {
  var new_questionset = new Questionset(req.body);
  new_questionset.save(function(err, questionset) {
    if (err)
      res.send(err);
    res.json(questionset);
  });
};

exports.get_a_questionset = function(req, res) {
  Questionset.findById(req.params.questionsetId, function(err, questionset) {
    if (err)
      res.send(err);
    res.json(questionset);
  });
};

exports.update_a_questionset = function(req, res) {
  console.log(req.body);
  // Questionset.update({_id: req.params.questionsetId}, {$push: {questions: req.body}}, function(err, question){
  //   if (err) {
  //     console.error('Error: ' + err);
  //   }
  //   console.error('question: ' + question);
  // });
};

exports.delete_a_questionset = function(req, res) {
  Questionset.remove({_id: req.params.questionsetId}, function(err, questionset) {
    if (err) {
      console.error('Error: ' + err);
    }
    res.json({ message: 'Questionset successfully deleted' });
  });
};

exports.delete_a_question = function(req, res) {
  Questionset.updateOne({_id: req.params.questionsetId}, {$pull: {"questions": {"id": req.params.questionId}}},
    function(err, questionset) {
    if (err) {
      console.error('Error: ' + err);
    }
    res.json({ message: 'Question successfully deleted' });
  });
};
