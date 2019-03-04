import { addVote } from '../../controllers/opinions';

export default () => async ({ params: { opinionId }, user: { id: userId } }, res) => {
  await addVote({ opinionId, userId });
  res.send(200);
};
