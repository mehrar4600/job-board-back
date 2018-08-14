'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const jobsArray = [];
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
/*
  Add altering commands here.
  Return a promise to correctly handle asynchronicity.

  Example:
  return queryInterface.bulkInsert('Person', [{
    name: 'John Doe',
    isBetaMember: false
  }], {});
*/

/*
  Add reverting commands here.
  Return a promise to correctly handle asynchronicity.

  Example:
  return queryInterface.bulkDelete('Person', null, {});
*/
