const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const users = [{
  password: 'admin666',
  email: 'admin@admin.admin',
  isAdmin: true,
  verified: true,
  age: 27,
  socialLink: 'https://www.facebook.com/danxil',
  socialId: 'fb_danxil',
  professionId: null,
  locationId: null,
  educationId: null,
  createdAt: new Date(null),
  updatedAt: new Date(null),
}];

module.exports = {
  up: async (queryInterface) => {
    const professions = await queryInterface.sequelize.query('SELECT id from "Professions";');
    const locations = await queryInterface.sequelize.query('SELECT id from "Locations";');
    const education = await queryInterface.sequelize.query('SELECT id from "Education";');
    return queryInterface.bulkInsert('Users', users.map(i => ({
      ...i,
      professionId: professions[0][0].id,
      locationId: locations[0][0].id,
      educationId: education[0][0].id,
    })), {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users', { email: { [Op.or]: users.map(i => i.email) } });
  },
};
