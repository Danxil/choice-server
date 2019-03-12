const _ = require('lodash');
const Sequelize = require('sequelize');
const candidatesList = require('../candidates');

const Op = Sequelize.Op;

const createOpinionItem = async ({ text, opinionId, type, queryInterface }) => {
  await queryInterface.bulkInsert('OpinionItems', [{
    opinionId,
    text,
    type,
    createdAt: new Date(null),
    updatedAt: new Date(null),
  }]);
};

const createOpinion = async ({ opinion, candidateName, userId, queryInterface }) => {
  const candidatesResult = await queryInterface.sequelize.query(`SELECT id from "Candidates" WHERE "name" LIKE '${candidateName}';`);
  const opinionObj = {
    verified: true,
    overallText: opinion.overallText,
    userId,
    candidateId: candidatesResult[0][0].id,
    createdAt: new Date(null),
    updatedAt: new Date(null),
  };
  const result = await queryInterface.bulkInsert('Opinions', [opinionObj], { returning: true });
  const opinionId = result[0].id;

  if (opinion.pros) {
    await Promise.all(opinion.pros.map(text => createOpinionItem({
      text,
      opinionId,
      type: true,
      queryInterface,
    })));
  }
  if (opinion.cons) {
    await Promise.all(opinion.cons.map(text => createOpinionItem({
      text,
      opinionId,
      type: false,
      queryInterface,
    })));
  }
};

module.exports = {
  up: async (queryInterface) => {
    try {
      const users = await queryInterface.sequelize.query('SELECT id from "Users" WHERE "isBot"=true;');
      const arr = candidatesList.filter(i => i.opinions && i.opinions.length)
      .map((candidate) => {
        return candidate.opinions.map((opinion) => {
          const userId = _.sample(users[0]).id;
          return createOpinion({
            opinion,
            candidateName: candidate.name,
            userId,
            queryInterface,
          });
        });
      });

      await Promise.all([].concat.apply([], arr));
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Opinions', { createdAt: { [Op.eq]: new Date(null) } });
  },
};
