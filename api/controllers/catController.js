'use strict';

var mongoose = require('mongoose'),
  Cat = mongoose.model('Cats');

exports.list_all_categories = function(req, res) {
  Cat.find({}, function(err, Cat) {
    if (err)
      res.send(err);
    console.log("category:   " + Cat);
    res.json(Cat);
  });
};

exports.create_a_category = function(req, res) {
  var new_category = new Cat(req.body);
  new_category.save(function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });
};
