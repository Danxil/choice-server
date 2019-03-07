const Sequelize = require('sequelize');
const moment = require('moment');

const Op = Sequelize.Op;

const votes = [
  {
    userId: null,
    opinionId: null,
    createdAt: new Date(null),
    updatedAt: new Date(null),
  },
];

module.exports = {
  up: async (queryInterface) => {
    const users = await queryInterface.sequelize.query('SELECT id from "Users" WHERE "isAdmin"=true;');
    const opinions = await queryInterface.sequelize.query(`SELECT id from "Opinions" WHERE "createdAt"::date='${moment(new Date(null)).format('YYYY-MM-DD')}';`);
    return queryInterface.bulkInsert('Votes', votes.map(i => ({
      ...i,
      opinionId: opinions[0][0].id,
      userId: users[0][0].id,
    })), {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Votes', { createdAt: { [Op.eq]: new Date(null) } });
  },
};
