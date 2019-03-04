export default (sequelize) => {
  const Vote = sequelize.define('Vote', {}, {
    name: {
      singular: 'vote',
      plural: 'votes',
    },
  });
  Vote.associate = (models) => {
    models.Vote.belongsTo(models.User, { foreignKey: 'userId' });
    models.Vote.belongsTo(models.Opinion, { foreignKey: 'opinionId' });
  };
  return Vote;
};
