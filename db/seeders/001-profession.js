const professions = require('../professions');

module.exports = {
  up: (queryInterface) => {
    const professionsData = professions.filter(i => i).map(profession => ({
      name: profession,
      createdAt: new Date(null),
      updatedAt: new Date(null),
    }));
    return queryInterface.bulkInsert('Professions', professionsData, {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Professions', null);
  },
};
