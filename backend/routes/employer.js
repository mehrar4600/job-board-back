var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const Employer = require("../services/employerServices")


router.post('/create', function (req, res) {
  ss().createEmployer(req.body.employer)
    .then(function success(employer) {
      var token = jwt.sign({ id: employer.id, role:'employer' }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
      res.json({
        employer: employer,
        message: "created",
        sessionToken: token
      }), function error(err) {
        res.send(500, err.message);
      }
    })
})

router.post('/signin', function (req, res) {
ss().signIn(req.body.employer)
    .then(function success(employer) {
        if (employer) {
          bcrypt.compare(req.body.employer.password, employer.passwordhash, function (err, matches) {
            if (matches) {
              var token = jwt.sign({ id: employer.id, role:'employer' }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
              res.json({
                employer: employer,
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
  ss().updateEmployer(req.body.employer)
  .then(function updatesuccess(employer){
      res.json({
          employer:employer
      })
  },function updateError(err){ 
      res.send(500, err.message);
  })
})

router.delete('/delete/:id', function(req,res){
  ss().deleteEmployer(req.params.id)
  .then(function deletesuccess(employer){
    res.json({
      employer:employer,
      message:"deleted"
    })
  },
function deleteError(err){
  res.send(500, err.message)
})
})


router.get('/:id', function (req,res){
    ss().getStudent(req.params.id)
    .then(function getsuccess(student){
        res.json({
            employer:employer,
            message:"got the employer"
        })
    }, function gotError(err){
        res.send(500, err.message)
    })
})

const ss = () => new Employer();

module.exports = router;