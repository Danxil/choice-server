const Sequelize = require('sequelize');
const moment = require('moment');

const Op = Sequelize.Op;

const opinionItems = [
  {
    type: true,
    text: 'Общее впечатление о кандидате общее, впечатление о кандидате. Общее впечатление',
    opinionId: null,
    createdAt: new Date(null),
    updatedAt: new Date(null),
  },
  {
    type: false,
    text: 'Общее впечатление о кандидате общее, впечатление о кандидате.',
    opinionId: null,
    createdAt: new Date(null),
    updatedAt: new Date(null),
  },
];

module.exports = {
  up: async (queryInterface) => {
    const opinions = await queryInterface.sequelize.query(`SELECT id from "Opinions" WHERE "createdAt"::date='${moment(new Date(null)).format('YYYY-MM-DD')}';`);
    return queryInterface.bulkInsert('OpinionItems', opinionItems.map(i => ({
      ...i,
      opinionId: opinions[0][0].id,
    })), {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('OpinionItems', { createdAt: { [Op.eq]: new Date(null) } });
  },
};
