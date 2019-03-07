import { addVote } from '../../controllers/opinions';

export default () => async ({ params: { opinionId }, user: { id: userId } }, res) => {
  try {
    await addVote({ opinionId, userId });
    res.send(200);
  } catch (e) {
    console.log(e);
    res.send(400);
  }
};
