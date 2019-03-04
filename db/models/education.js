export default (sequelize, DataTypes) => {
  const Education = sequelize.define('Education', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    name: {
      singular: 'education',
      plural: 'education',
    },
  });
  Education.associate = (models) => {
    models.Education.hasMany(models.User, { foreignKey: 'educationId' });
  };
  return Education;
};
