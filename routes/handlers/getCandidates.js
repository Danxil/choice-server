import { getCandidates } from '../../controllers/candidates';

export default () => async (req, res) => {
  try {
    const candidates = await getCandidates();
    return res.send(candidates);
  } catch (e) {
    console.log(e);
    return res.send(400);
  }
};
