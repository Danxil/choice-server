module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Candidates', [
      {
        id: 1,
        name: 'Петр Порошенко',
        description: 'Олигарх, бизнесмен, политик',
        age: 77,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Candidates', null);
  },
};
