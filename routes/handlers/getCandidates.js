import { getCandidates } from '../../controllers/candidates';

export default () => async (req, res) => {
  const candidates = await getCandidates();
  return res.send(candidates);
};
