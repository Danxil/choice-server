const locations = require('../locations');

module.exports = {
  up: (queryInterface) => {
    const locationsData = locations.filter(i => i).map(location => ({
      name: location,
      createdAt: new Date(null),
      updatedAt: new Date(null),
    }));
    return queryInterface.bulkInsert('Locations', locationsData, {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Locations', null);
  },
};
