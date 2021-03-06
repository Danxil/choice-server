module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'professionId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Professions',
        key: 'id',
      },
    }).then(() => queryInterface.addColumn('Users', 'age', {
      type: Sequelize.INTEGER,
      allowNull: false,
    })).then(() => queryInterface.addColumn('Users', 'locationId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Locations',
        key: 'id',
      },
    })).then(() => queryInterface.addColumn('Users', 'educationId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Education',
        key: 'id',
      },
    }));
  },
  down: () => {
    return Promise.resolve();
  },
};
