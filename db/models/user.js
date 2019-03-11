export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    password: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    socialLink: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    socialId: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    name: {
      singular: 'user',
      plural: 'users',
    },
  });
  User.associate = (models) => {
    models.User.hasMany(models.Opinion, { foreignKey: 'userId', onDelete: 'CASCADE' });
    models.User.belongsTo(models.Profession, { foreignKey: 'professionId' });
    models.User.belongsTo(models.Location, { foreignKey: 'locationId' });
    models.User.belongsTo(models.Education, { foreignKey: 'educationId' });
    models.User.hasMany(models.Vote, { foreignKey: 'userId' });
  };
  User.prototype.verifyPassword = function (password) {
    return password === this.password;
  };
  return User;
};
