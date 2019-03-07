module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('OpinionItems', 'type', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('OpinionItems');
  },
};
