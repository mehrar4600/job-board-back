var express = require('express');
var router = express.Router();
var JobService = require('../services/job');
var sequelize = require('../db');
var Job = sequelize.import('../models/job_model');

router.post('/create', function (req, res) {
    js().createJobs(req.body.job).then(
       function success(job){
        res.json({
            job: job,
            message: "created"
            
        })
    }
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
    js().updateJob(req.body.job)
    .then(function updateSuccess(job){
        res.send({
            job:req.body.job,
            message: "updated"
        })
    },function updateError(err){ 
        res.send(500, err.message);
})
})


const js = () => new JobService();

module.exports = router