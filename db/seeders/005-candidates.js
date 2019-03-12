const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const candidatesList = require('../candidates');

const candidates = candidatesList.map(({ name, age, description, photoUrl }) => ({
  name,
  age,
  description,
  photoUrl,
  createdAt: new Date(null),
  updatedAt: new Date(null),
}));

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Candidates', candidates, {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Candidates', { name: { [Op.or]: candidates.map(i => i.name) } });
  },
};
