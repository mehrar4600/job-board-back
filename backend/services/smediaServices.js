const db = require('../models/index').sequelize;
const sMedia = db.model('Smedia');

class sMedias {
createMedia(media){
    return sMedia.create({
        linkedin:media.linkedin,
        github:media.github,
        portfolio:media.portfolio,
        UserId:student.id
    })
}
}

module.exports = sMedias;