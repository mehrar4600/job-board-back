var express = require('express');
var router = express.Router();
var models = require('../models');


router.post('/createstudent', function(req,res){

  var fname = req.body.student.first_name;
  var lname = req.body.student.last_name;
  var email = req.body.student.email;
  var password = req.body.student.passwordhash;
  var resume = req.body.student.resume;

  models.Student.create({
    first_name: fname,last_name:lname,email:email,passwordhash:password,resume:resume}).then(function success(student){
    res.json({
      student:student,
      message:"created"
    }), function error(err){
      res.send(500, err.message);
    }
  })
})

module.exports = router;
