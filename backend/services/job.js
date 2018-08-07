const db = require('../models/index').sequelize;
const Jobs = db.model('Job_Model');

class JobService {
    getAllJobs() {
        return Jobs.findAll()
    }
}

module.exports = JobService;
