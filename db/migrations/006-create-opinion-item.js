module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OpinionItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      opinionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Opinions',
          key: 'id',
        },
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
  down: (queryInterface) => {
    return queryInterface.dropTable('OpinionItems');
  },
};
