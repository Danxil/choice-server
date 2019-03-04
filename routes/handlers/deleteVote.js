import { deleteVote } from '../../controllers/opinions';

export default () => async ({ params: { opinionId }, user: { id: userId } }, res) => {
  await deleteVote({ opinionId, userId });
  res.send(200);
};
