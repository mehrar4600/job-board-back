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

    updateStudent(student) {
    return Student.update({
        first_name: student.first_name,
        last_name: student.last_name,
        email: student.email,
        passwordhash: bcrypt.hashSync(student.password,10),
        resume: student.resume
    }, {where: {email:student.email}})
}

deleteStudent(id){
return Student.destroy({
    where:{id:id}
})
}
}
module.exports = student;