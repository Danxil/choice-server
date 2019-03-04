export const getOpinions = async () => {
  const opinions = await global.db.Opinion.findAll({
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
export const deleteVote = async ({ opinionId, userId }) => {
  return global.db.Vote.destroy({ where: { opinionId, userId } });
};
export const addVote = async ({ opinionId, userId }) => {
  return global.db.Vote.create({ opinionId, userId });
};
