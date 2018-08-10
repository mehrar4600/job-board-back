const db = require('../models/index').sequelize;
const Jobs = db.model('Job_Model');
const employer = db.model('Employer');

class JobService {

    createJobs(job, id){
    return Jobs.create({
        job_title: job.job_title,
        job_description: job.job_description,
        job_type: job.job_type,
        company_name: job.company_name,
        company_site:job.company_site,
        company_address:job.company_address,
        EmployerId: id
    })
}
getAllJobs() {
    return Jobs.findAll()
}
updateJob(job, id) {
    return Jobs.update({
        job_title: job.job_title,
        job_description: job.job_description,
        job_type: job.job_type,
        company_name: job.company_name,
        company_site:job.company_site,
        company_address:job.company_address,
    }, {where: {id:id}})
}

 getOneJob(id) {
     return Jobs.findOne(
         {where: {
             id:id
            
         }
         })
 }
}

module.exports = JobService;

