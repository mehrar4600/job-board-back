var express = require('express');
var router = express.Router();
var JobService = require('../services/job');
var sequelize = require('../db');
var Job = sequelize.import('../models/job_model');

router.post('/create', function (req, res) {
    js().createJobs(req.body.job, req.employer.id).then(
       function success(job){
        res.json({
            job: job,
            message: "created"
        })
    }
)
})

router.get('/all/:employerId', (req, res) => {
    js().getEmployerJobs(req.params.employerId).then(
        (jobs) => res.json({jobs})
    )
})

router.get('/', (req, res) => {
    js().getAllJobs().then(
        (jobs) => res.json({ jobs })
    )
})

router.get('/:id', (req, res) => {
    js().getOneJob(req.params.id).then(
        function getJob(id){
            res.json({
                id: id
            })
        },
         
    err => {
        res.json({
            statuscode: 500, 
            error: err.message
        })
    }
)
})


router.delete('/delete/:id', function(req, res){
    Job.destroy({where: {id: req.params.id}}).then(
        job => {
            res.json({
                job: job,
                message: 'deleted job',
            })
        },
        err => {
            res.json({
                statuscode: 500, 
                error: err.message
            })
        }
    )
})
        
    
router.put('/update/:id', function(req, res){
    js().updateJob(req.body.job, req.params.id)
    .then(function updateSuccess(job){
        res.send({
            job:job,
            message: "updated"
        })
    },function updateError(err){ 
        res.send(500, err.message);
})
})

router.get('/:employerId/:jobId', (req, res) => {
    js().getEmployerJob(req.params.employerId, req.params.jobId).then(
        (job) => res.json({job})
    )
})


const js = () => new JobService();

module.exports = router