module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Users', [{
      id: 1,
      password: 'admin666',
      email: 'admin@admin.admin',
      isAdmin: true,
      verified: true,
      age: 27,
      socialLink: 'https://www.facebook.com/danxil',
      socialId: 'fb_danxil',
      professionId: 1,
      locationId: 1,
      educationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users', null);
  },
};
