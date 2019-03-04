module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Professions', [
      {
        id: 1,
        name: 'Программист',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Таксист',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Professions', null);
  },
};
