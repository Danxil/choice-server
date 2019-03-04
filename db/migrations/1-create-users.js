module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      password: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      socialLink: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      socialId: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
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
    return queryInterface.dropTable('Users');
  },
};
