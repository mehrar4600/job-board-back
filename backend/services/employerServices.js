const db = require('../models/index').sequelize
const Employer = db.model('Employer');
var bcrypt = require('bcrypt');

class employer {
    createEmployer(employer){
      return  Employer.create({
            first_name:employer.first_name,
            last_name:employer.last_name,
            email:employer.email,
            passwordhash:bcrypt.hashSync(employer.password,10),
            company_name:employer.company_name
        })
    }

    signIn(employer){
        return Employer.findOne({
            where: { email:employer.email}
        })
    }

    updateEmployer(employer) {
    return Employer.update({
        first_name: employer.first_name,
        last_name: employer.last_name,
        email: employer.email,
        passwordhash: bcrypt.hashSync(employer.password,10),
        company_name:employer.company_name
    }, {where: {email:employer.email}})
}

deleteEmployer(id){
return Employer.destroy({
    where:{id:id}
})
}
getEmployer(id){
    return Employer.findOne({
        where:{id:id}})
}

}
module.exports = employer;