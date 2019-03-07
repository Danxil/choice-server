import { verifyOpinion } from '../../controllers/opinions';

export default () => async ({ params: { opinionId } }, res) => {
  try {
    await verifyOpinion({ opinionId });
    res.send(200);
  } catch (e) {
    console.log(e);
    res.send(400);
  }
};
