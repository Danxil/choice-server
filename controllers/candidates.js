export const getCandidates = async () => {
  return global.db.Candidate.findAll();
};
