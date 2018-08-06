var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res) {
  // models.Student.findAll({
    // include: [models.Job_model]
  // }).then(function(students){
    res.render('index',{
      students:students
  
    })
  })

// });

module.exports = router;
