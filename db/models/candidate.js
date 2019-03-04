export default (sequelize, DataTypes) => {
  const Candidate = sequelize.define('Candidate', {
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    name: {
      singular: 'candidate',
      plural: 'candidates',
    },
  });
  return Candidate;
};
