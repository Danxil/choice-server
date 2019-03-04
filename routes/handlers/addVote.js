import { addVote } from '../../controllers/opinions';

export default () => async ({ params: { opinionId }, user: { id: userId } }, res) => {
  const vote = await addVote({ opinionId, userId });
  if (vote) res.send(200);
  else res.send(400);
};
