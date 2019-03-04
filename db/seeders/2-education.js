module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Education', [
      {
        id: 1,
        name: 'Высшее',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Среднее',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Education', null);
  },
};
