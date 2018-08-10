'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Students', [{
        first_name: 'John Doe',
       last_name:'mehra',
       email:'mehrar',
       passwordhash:'1234',
       resume:'hello',
       createdAt: new Date(),
       updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
