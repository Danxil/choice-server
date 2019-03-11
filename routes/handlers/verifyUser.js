import { verifyUser } from '../../controllers/user';

export default () => async ({ params: { userId }, body: { socialId } }, res) => {
  try {
    await verifyUser({ userId, socialId });
    res.send(200);
  } catch (e) {
    console.log(e);
    res.send(400);
  }
};
