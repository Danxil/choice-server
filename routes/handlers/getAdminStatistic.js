const getUsersStatistic = async () => {
  const usersOptions = { where: { isAdmin: false } };
  const users = await global.db.User.findAll(usersOptions);
  return {
    users: users.length,
  };
};
const getField = ({ label, value }) => {
  return {
    label,
    value,
  };
};
const getUsersFileds = ({ source }) => {
  return [
    getField({ label: 'Users', value: source.users }),
  ];
};

export default () => async (req, res) => {
  const realUsersStatistic = await getUsersStatistic();
  return res.send({
    fields: [
      {
        label: 'Real users statistic',
        fields: getUsersFileds({ source: realUsersStatistic }),
      },
    ],
  });
};
