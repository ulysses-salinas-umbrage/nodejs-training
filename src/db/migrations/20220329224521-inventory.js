'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Inventories', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      carId: {
        type: Sequelize.UUID,
        references: {
          model: 'Cars',
          key: 'id',
        },
      },
      dealerId: {
        type: Sequelize.UUID,
        references: {
          model: 'Dealers',
          key: 'id',
        },
      },
      saleId: {
        type: Sequelize.UUID,
        references: {
          model: 'Sales',
          key: 'id',
        },
      },
      isSold: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      isNew: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Inventories');
  },
};
