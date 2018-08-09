var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const Student = require("../services/studentServices")

router.post('/create', function (req, res) {
  ss().createStudent(req.body.student)
    .then(function success(student) {
      var token = jwt.sign({ id: student.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
      res.json({
        student: student,
        message: "created",
        sessionToken: token
      }), function error(err) {
        res.send(500, err.message);
      }
    })
})

router.post('/signin', function (req, res) {
ss().signIn(req.body.student)
    .then(function success(student) {
        if (student) {
          bcrypt.compare(req.body.student.password, student.passwordhash, function (err, matches) {
            if (matches) {
              var token = jwt.sign({ id: student.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
              res.json({
                student: student,
                message: "successfully authenticated",
                sessionToken: token
              })
            } else {
              res.status(502).send({ error: "failed 502" });
            }
          });
        } else {
          res.status(500).send({ error: "authentication error" });
        }
      },
      function (err) {
        res.status(501).send({ error: "failed" });
      }
    )
})

router.put('/update/:id', function(req,res){
  ss().updateStudent(req.body.student)
  .then(function updatesuccess(student){
      res.send({
          student:student
      })
  },function updateError(err){ 
      res.send(500, err.message);
  })
})

// router.delete('/delete/:id', function(req,res){
//   ss().deleteid(req.body.student)
//   .then(function deleteSuccess(student){
//       res.send({
//         student:student
//       });
//   },
// function deleteError(err){
//   res.send(500, err.message)
// })
// })




const ss = () => new Student();

module.exports = router;
