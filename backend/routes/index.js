var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  models.Student.findAll({
    include: [models.Smedia]
  }).then(function(students){
    res.render('index',{
      students:students
  
    })
  })

});

module.exports = router;