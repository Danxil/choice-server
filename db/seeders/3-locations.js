module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Locations', [
      {
        id: 1,
        name: 'Киев',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Киевская обл.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Locations', null);
  },
};
