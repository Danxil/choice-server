export default (sequelize, DataTypes) => {
  const Profession = sequelize.define('Profession', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    name: {
      singular: 'profession',
      plural: 'professions',
    },
  });
  Profession.associate = (models) => {
    models.Profession.hasMany(models.User, { foreignKey: 'professionId' });
  };
  return Profession;
};
