import { verifyUser } from '../../controllers/user';

export default () => async ({ params: { userId } }, res) => {
  try {
    await verifyUser({ userId });
    res.send(200);
  } catch (e) {
    console.log(e);
    res.send(400);
  }
};
