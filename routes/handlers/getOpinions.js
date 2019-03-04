import { getOpinions } from '../../controllers/opinions';

export default () => async ({ params: { candidateId } }, res) => {
  const opinions = await getOpinions({ candidateId });
  return res.send(opinions);
};
