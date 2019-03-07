module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Opinions', 'candidateId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Candidates',
        key: 'id',
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.removeColumn('Opinions', 'candidateId');
  },
};
