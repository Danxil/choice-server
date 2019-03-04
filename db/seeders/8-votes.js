module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Votes', [
      {
        userId: 1,
        opinionId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Votes', null);
  },
};
