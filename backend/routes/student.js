var express = require('express');
var router = express.Router();
var models = require('../models');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var sequelize = require('../db');

router.post('/createstudent', function(req,res){

  var fname = req.body.student.first_name;
  var lname = req.body.student.last_name;
  var email = req.body.student.email;
  var password = req.body.student.passwordhash;
  var resume = req.body.student.resume;

  models.Student.create({
    first_name: fname,last_name:lname,email:email,passwordhash:bcrypt.hashSync(password,10),resume:resume})
    .then(function success(student){
      var token = jwt.sign({id:student.id, role:"student"}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
    res.json({
      student:student,
      message:"created",
      sessionToken: token
    }), function error(err){
      res.send(500, err.message);
    }
  })
})

router.post('/signin', function(req,res){
  models.Student.findOne({
    where: {email:req.body.student.email}})
    .then(
      function(student){
        if(student){
          bcrypt.compare(req.body.student.passwordhash, student.passwordhash, function(err, matches){
            if(matches){
              var token = jwt.sign({id:student.id, role:"student"}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
              res.json({
                student:student,
                message:"successfully authenticated",
                sessionToken:token
              })
            }else{
              res.status(502).send({error:"failed 502"});
            }
              });
        } else {
          res.status(500).send({error:"authentication error"});
        }
      },
      function(err){
        res.status(501).send({error: "failed"});
      }
    )
})

module.exports = router;
