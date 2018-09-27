'use strict';


var mongoose = require('mongoose'),
  Student = mongoose.model('Students'),
  Answer = mongoose.model('Answers');
  Result = mongoose.model('Results');
  Questionset = mongoose.model('Questionsets')

exports.list_all_students = function(req, res) {
  Student.find({}, function(err, students) {
    if (err)
      res.send(err);
    res.json(students);
  });
};

exports.get_all_students_excel = function(req, res) {
  Student.find({}).lean().exec(function(err, students){
    res.xls('Students.xlsx', students);
  })
};

exports.get_a_student = function(req, res) {
  Student.findById(req.params.studentId, function(err, student) {
    if (err)
      res.send(err);
    console.log(student["id"]);
    res.json(student);
  });
};

exports.get_a_student_results = function(req, res) {
  Result.find({s_id: req.params.studentId}, function(err, results){
    if (err)
      res.send(err);
    res.json(results);
  });
};

exports.get_a_student_results_excel = function(req, res) {
  Result.find({s_id: req.params.studentId}).lean().exec(function(err, results){
    Student.findById(req.params.studentId).lean().exec(function(err, student) {
      console.log(student.firstname);
      for (var i = 0; i < results.length; i++) {
        delete results[i]._id
        delete results[i].s_id
        results[i].timestamp = new Date(results[i].timestamp * 1000).toISOString()
        // Questionset.findById(results[i].q_id).select({"name": 1}).lean().exec(function(err, questionset){
        //   console.log('iiiiiiii' + i);
        //   results[i].q_id = questionset.name
        // })
      }
      res.xls(student.id + ' ' + student.firstname + ' ' + student.lastname + '.xlsx', results);
    })
  })
};
