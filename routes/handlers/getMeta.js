import { getMeta } from '../../controllers/meta';

export default () => async (req, res) => {
  const meta = await getMeta();
  return res.send(meta);
};
