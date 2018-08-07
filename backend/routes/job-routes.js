var express = require('express');
var router = express.Router();
var JobService = require('../services/job');


router.get('/', (req, res) => {
    js().getAllJobs().then(
        (jobs) => res.json({jobs})
    )
})

const js = () => new JobService();

module.exports = router