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
export const verifyUser = async ({ userId }) => {
  await global.db.User.update({ verified: true }, { where: { id: userId } });
};
export const deleteUser = async ({ userId }) => {
  await global.db.User.destroy({ where: { id: userId } });
};
export const getNotVerifiedUsers = async () => {
  return global.db.User.findAll({
    where: {
      verified: false,
    },
    order: [
      ['createdAt', 'DESC'],
    ],
  });
};
