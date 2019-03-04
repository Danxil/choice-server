export default (sequelize, DataTypes) => {
  const Opinion = sequelize.define('OpinionItem', {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    name: {
      singular: 'opinionItem',
      plural: 'opinionItems',
    },
  });
  Opinion.associate = (models) => {
    models.OpinionItem.belongsTo(models.Opinion, { foreignKey: 'opinionId' });
  };
  return Opinion;
};
