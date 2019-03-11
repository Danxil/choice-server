import Sequelize from 'sequelize';

export const getCandidates = async () => {
  return global.db.Candidate.findAll({
    attributes: [
      'id',
      'age',
      'name',
      'description',
      'photoUrl',
      [Sequelize.literal('(SELECT COUNT(*) FROM "Opinions" WHERE "Opinions"."candidateId" = "Candidate"."id" and "Opinions"."verified" = true)'), 'opinionsCount'],
    ],
    order: [[Sequelize.literal('"opinionsCount"'), 'DESC'], ['name', 'ASC']],
  });
};
