import { getNotVerifiedOpinions, getOpinions } from '../../controllers/opinions';

export default () => async ({ query: { verified = 'true' }, params: { candidateId }, user }, res) => {
  try {
    const opinions = JSON.parse(verified) === false ?
      await getNotVerifiedOpinions({ candidateId }) :
      await getOpinions({ candidateId, userId: user ? user.id : null });
    return res.send(opinions);
  } catch (e) {
    console.log(e);
    return res.send(400);
  }
};
