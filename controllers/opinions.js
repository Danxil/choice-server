import Sequelize from 'sequelize';

const Op = Sequelize.Op;

export const getNotVerifiedOpinions = async ({ candidateId }) => {
  const where = {
    verified: false,
  };
  if (candidateId) {
    where.candidateId = candidateId;
  }
  return global.db.Opinion.findAll({
    where,
    include: [
      global.db.OpinionItem,
      global.db.Vote,
      {
        model: global.db.User,
        where: {
          verified: true,
        },
        include: [
          global.db.Education,
          global.db.Profession,
          global.db.Location,
        ],
      },
    ],
    order: [
      ['createdAt', 'DESC'],
    ],
  });
};
export const getOpinions = async ({ candidateId, userId }) => {
  const opinions = await global.db.Opinion.findAll({
    where: {
      candidateId,
      [Op.or]: [
        { userId },
        { verified: true },
      ],
    },
    include: [
      global.db.OpinionItem,
      global.db.Vote,
      {
        model: global.db.User,
        include: [
          global.db.Education,
          global.db.Profession,
          global.db.Location,
        ],
      },
    ],
    order: [
      ['createdAt', 'DESC'],
    ],
  });
  return opinions;
};
export const addOpinion = async ({ candidateId, userId, pros, cons, overallText }) => {
  const opinion = await global.db.Opinion.create({ overallText, userId, candidateId });
  const prosPromises = pros.map(text => global.db.OpinionItem.create({
    text,
    type: true,
    opinionId: opinion.id,
  }));
  const consPromises = cons.map(text => global.db.OpinionItem.create({
    text,
    type: false,
    opinionId: opinion.id,
  }));
  return Promise.all(prosPromises.concat(consPromises));
};
export const deleteVote = async ({ opinionId, userId }) => {
  return global.db.Vote.destroy({ where: { opinionId, userId } });
};
export const addVote = async ({ opinionId, userId }) => {
  const vote = await global.db.Vote.find({ where: { opinionId, userId } });
  if (vote) throw new Error('This vote already exist');
  return global.db.Vote.create({ opinionId, userId });
};
export const verifyOpinion = async ({ opinionId }) => {
  await global.db.Opinion.update({ verified: true }, { where: { id: opinionId } });
};
export const deleteOpinion = async ({ opinionId }) => {
  await global.db.Vote.destroy({ where: { opinionId } });
  await global.db.OpinionItem.destroy({ where: { opinionId } });
  await global.db.Opinion.destroy({ where: { id: opinionId } });
};
