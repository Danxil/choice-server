export const getMeta = async () => {
  const results = await Promise.all([
    global.db.Profession.findAll(),
    global.db.Location.findAll(),
    global.db.Education.findAll(),
  ]);

  return {
    professions: results[0],
    locations: results[1],
    education: results[2],
  };
};
