module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Education', [
      {
        name: 'Загальна середня',
        createdAt: new Date(null),
        updatedAt: new Date(null),
      },
      {
        name: 'Вища',
        createdAt: new Date(null),
        updatedAt: new Date(null),
      },
      {
        name: 'Науковий ступінь',
        createdAt: new Date(null),
        updatedAt: new Date(null),
      },
      {
        name: 'Немає',
        createdAt: new Date(null),
        updatedAt: new Date(null),
      },
    ], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Education', null);
  },
};
