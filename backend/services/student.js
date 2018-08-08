const db = require('../models/index').sequelize
const Student = db.model('Student');
var bcrypt = require('bcrypt');

class student {
    createStudent(student){
      return  Student.create({
            first_name:student.first_name,
            last_name:student.last_name,
            email:student.email,
            passwordhash:bcrypt.hashSync(student.password,10),
            resume:student.resume
        })
    }
    signIn(student){
        return Student.findOne({
            where: { email:student.email}
        })
    }
}

module.exports = student;
