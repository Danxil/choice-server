export const getOpinions = async ({ candidateId }) => {
  const opinions = await global.db.Opinion.findAll({
    where: { candidateId },
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
  if (vote) return null;
  return global.db.Vote.create({ opinionId, userId });
};
