'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     // Add seed commands here.
     
      Example:
      await queryInterface.bulkInsert('Cars', [
        {
        userId: 1, totalPrice: 1.00, createdAt: new Date(), updatedAt: new Date()
      },
      {
        userId: 2, totalPrice: 2.00, createdAt: new Date(), updatedAt: new Date()
      },
      {
        userId: 3, totalPrice: 3.00, createdAt: new Date(), updatedAt: new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     //Add commands to revert seed here.
    
     await queryInterface.bulkDelete('Cars', null, {});
     
  }
};
