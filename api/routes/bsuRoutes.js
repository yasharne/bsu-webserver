'use strict';
module.exports = function(app) {
  var question = require('../controllers/questionController');
  var student = require('../controllers/studentController');
  var category = require('../controllers/catController');
  var questionset = require('../controllers/questionsetController');

  app.route('/questions')
     .get(question.list_all_questions)
     .post(question.create_a_question);


   app.route('/questions/:questionId')
     .get(question.read_a_question)
     .put(question.update_a_question)
     .delete(question.delete_a_question);

  app.route('/students')
      .get(student.list_all_students);

  app.route('/students/getexcel')
    .get(student.get_all_students_excel)

  app.route('/students/:studentId')
      .get(student.get_a_student);

  app.route('/students/:studentId/results')
    .get(student.get_a_student_results);

    app.route('/students/:studentId/results/getexcel')
      .get(student.get_a_student_results_excel);

  app.route('/categories')
      .get(category.list_all_categories)
      .post(category.create_a_category);

  app.route('/questionsets')
      .get(questionset.list_all_questionsets)
      .post(questionset.create_a_questionset);

  app.route('/questionsets/:questionsetId')
      .get(questionset.get_a_questionset)
      .put(questionset.update_a_questionset)
      .delete(questionset.delete_a_questionset);

  app.route('/questionsets/:questionsetId/:questionId')
      .delete(questionset.delete_a_question);
};
