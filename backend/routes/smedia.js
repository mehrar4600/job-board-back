var express = require('express');
var router = express.Router();
var models = require('../models');
const sMedia = require('../services/smedia');

router.post('/create', function(req,res){
sm().createMedia(req.body.media)
.then(function success(media) {
    res.json({
        media: media,
        message:"created"
   
}), function error(err){
    res.send(500, err.message);
}
})
})

const sm = () => new sMedia();

module.exports = router;