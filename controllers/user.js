import { deleteOpinion } from './opinions';

export const signUp = async ({
  email,
  socialLink,
  password,
  age,
  professionId,
  educationId,
  locationId,
}) => {
  const user = await global.db.User.findOne({ where: { email } });
  if (user) {
    throw new Error(`User with email ${email} is already exist`);
  }
  return global.db.User.create({
    email,
    password,
    socialLink,
    age,
    professionId,
    educationId,
    locationId,
  });
};
export const verifyUser = async ({ userId, socialId }) => {
  await global.db.User.update({ verified: true, socialId }, { where: { id: userId } });
};
export const deleteUser = async ({ userId }) => {
  const opinions = await global.db.Opinion.findAll({ where: { userId } });
  await Promise.all(opinions.map(opinion => deleteOpinion({ opinionId: opinion.id })));
  await global.db.User.destroy({ where: { id: userId } });
};
export const getNotVerifiedUsers = async () => {
  return global.db.User.findAll({
    where: {
      verified: false,
    },
    include: [
      global.db.Education,
      global.db.Profession,
      global.db.Location,
    ],
    order: [
      ['createdAt', 'DESC'],
    ],
  });
};
