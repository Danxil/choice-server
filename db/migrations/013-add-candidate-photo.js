module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Candidates', 'photoUrl', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
  down: async (queryInterface) => {
    return queryInterface.removeColumn('Candidates', 'photoUrl');
  },
};
