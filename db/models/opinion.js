export default (sequelize, DataTypes) => {
  const Opinion = sequelize.define('Opinion', {
    overallText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    name: {
      singular: 'opinion',
      plural: 'opinions',
    },
  });
  Opinion.associate = (models) => {
    models.Opinion.belongsTo(models.User, { foreignKey: 'userId' });
    models.Opinion.belongsTo(models.Candidate, { foreignKey: 'candidateId' });
    models.Opinion.hasMany(models.OpinionItem, { foreignKey: 'opinionId' });
    models.Opinion.hasMany(models.Vote, { foreignKey: 'userId' });
  };
  return Opinion;
};
