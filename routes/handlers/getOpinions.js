import { getNotVerifiedOpinions, getOpinions } from '../../controllers/opinions';

export default () => async ({ query: { verified = 'true' }, params: { candidateId }, user }, res) => {
  const opinions = JSON.parse(verified) === false ?
    await getNotVerifiedOpinions() :
    await getOpinions({ candidateId, userId: user ? user.id : null });
  return res.send(opinions);
};
