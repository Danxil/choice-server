module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Opinions', [{
      id: 1,
      userId: 1,
      candidateId: 1,
      overallText: 'Общее впечатление о кандидате общее, впечатление о кандидате. Общее впечатление о кандидате общее, впечатление о кандидате. Общее впечатление о кандидате общее, впечатление о кандидате',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Opinions', null);
  },
};
