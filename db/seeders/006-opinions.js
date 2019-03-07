const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const opinions = [{
  overallText: 'Общее впечатление о кандидате общее, впечатление о кандидате. Общее впечатление о кандидате общее, впечатление о кандидате. Общее впечатление о кандидате общее, впечатление о кандидате',
  candidateId: null,
  createdAt: new Date(null),
  updatedAt: new Date(null),
}];

module.exports = {
  up: async (queryInterface) => {
    const users = await queryInterface.sequelize.query('SELECT id from "Users" WHERE "isAdmin"=true;');
    const candidates = await queryInterface.sequelize.query('SELECT id from "Candidates";');
    return queryInterface.bulkInsert('Opinions', opinions.map(i => ({
      ...i,
      candidateId: candidates[0][0].id,
      userId: users[0][0].id,
    })), {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Opinions', { createdAt: { [Op.eq]: new Date(null) } });
  },
};
