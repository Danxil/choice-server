export default (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    name: {
      singular: 'location',
      plural: 'locations',
    },
  });
  Location.associate = (models) => {
    models.Location.hasMany(models.User, { foreignKey: 'locationId' });
  };
  return Location;
};
