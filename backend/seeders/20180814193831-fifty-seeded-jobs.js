'use strict';
var chance = require('chance')();

module.exports = {
  up: (queryInterface, Sequelize) => {
    let jobsArray = [];
    for (let i = 0; i < 50; i++){
      jobsArray.push({
        job_title: chance.word(),
        job_description: chance.sentence(),
        job_type: chance.word(),
        company_name: chance.company(),
        company_site: 'Launch Fishers',
        company_address: '5132 Rosslyn Avenue',
        EmployerId: '1',
        createdAt: chance.date(),
        updatedAt: chance.date()
      })
    }
    return queryInterface.bulkInsert('Job_Models', jobsArray, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Job_Models', null, {})
  }
};
