module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Opinions', 'verified', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },
  down: async (queryInterface) => {
    return queryInterface.removeColumn('Opinions', 'verified');
  },
};
