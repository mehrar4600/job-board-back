var jwt = require('jsonwebtoken');
// var sequelize = require('../db');
var Student = sequelize.import('../models/student');

module.exports = function(req, res, next) {
    if (req.method == 'OPTIONS') {
        next()
    } else {
        var sessionToken = req.headers.authorization; 
        console.log(sessionToken) 
        if (!sessionToken) return res.status(403).send({ auth: false, message: 'No token provided.' }); 
        else { 
            jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => {
                if(decoded){
                   models.Student.findOne({where: { email: decoded.email}}).then(student => {
                        req.student = student;
                        next();
                    },
                    function(){
                        res.status(401).send({error: 'Not authorized'});
                    });
                } else {
                    res.status(400).send({error: 'Not authorized'});
                }
            });
        }
    }
}