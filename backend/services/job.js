const db = require('../models/index').sequelize;
const Jobs = db.model('Job_Model');


class JobService {

    createJobs(job){
    return Jobs.create({
        job_title: job.job_title,
        job_description: job.job_description,
        job_type: job.job_type,
        company_name: job.company_name,
        company_site:job.company_site,
        company_address:job.company_address,
        time:job.time
    })
}
getAllJobs() {
    return Jobs.findAll()
}
   
}

module.exports = JobService;

