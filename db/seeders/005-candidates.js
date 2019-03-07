const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const candidates = [
  {
    name: 'Петр Порошенко',
    description: 'Олигарх, бизнесмен, политик',
    age: 77,
    createdAt: new Date(null),
    updatedAt: new Date(null),
  },
];

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Candidates', candidates, {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Candidates', { name: { [Op.or]: candidates.map(i => i.name) } });
  },
};
