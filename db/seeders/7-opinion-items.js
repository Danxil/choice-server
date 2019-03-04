module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('OpinionItems', [
      {
        id: 1,
        type: true,
        text: 'Общее впечатление о кандидате общее, впечатление о кандидате. Общее впечатление',
        opinionId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        type: false,
        text: 'Общее впечатление о кандидате общее, впечатление о кандидате.',
        opinionId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('OpinionItems', null);
  },
};
