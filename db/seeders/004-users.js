const Sequelize = require('sequelize');
const _ = require('lodash');
const Chance = require('chance');

const Op = Sequelize.Op;
const chance = new Chance();

const botsAmount = 30;

const createBotObj = ({
  locationId,
  professionId,
  educationId,
}) => {
  return {
    isAdmin: false,
    isBot: true,
    verified: true,
    password: chance.string(),
    email: chance.email(),
    age: chance.natural({ min: 18, max: 70 }),
    socialLink: chance.url(),
    socialId: chance.string(),
    professionId,
    locationId,
    educationId,
    createdAt: new Date(null),
    updatedAt: new Date(null),
  };
};

module.exports = {
  up: async (queryInterface) => {
    const professions = await queryInterface.sequelize.query('SELECT id from "Professions";');
    const locations = await queryInterface.sequelize.query('SELECT id from "Locations";');
    const education = await queryInterface.sequelize.query('SELECT id from "Education";');
    const users = [
      {
        isBot: false,
        password: 'admin666',
        email: 'admin@admin.admin',
        isAdmin: true,
        verified: true,
        age: 27,
        socialLink: 'https://www.facebook.com/danxil',
        socialId: 'fb_danxil',
        professionId: professions[0][0].id,
        locationId: locations[0][0].id,
        educationId: education[0][0].id,
        createdAt: new Date(null),
        updatedAt: new Date(null),
      },
    ].concat(new Array(botsAmount).fill(undefined).map(() => createBotObj({
      professionId: _.sample(professions[0]).id,
      educationId: _.sample(education[0]).id,
      locationId: _.sample(locations[0]).id,
    })));
    await queryInterface.bulkInsert('Users', users, {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users', { createdAt: { [Op.eq]: new Date(null) } });
  },
};
