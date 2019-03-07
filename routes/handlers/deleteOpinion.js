import { deleteOpinion } from '../../controllers/opinions';

export default () => async ({ params: { opinionId } }, res) => {
  try {
    await deleteOpinion({ opinionId });
    res.send(200);
  } catch (e) {
    console.log(e);
    res.send(400);
  }
};
