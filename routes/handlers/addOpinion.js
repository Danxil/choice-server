import { addOpinion } from '../../controllers/opinions';

export default () => async ({
  params: { candidateId },
  user: { id: userId },
  body: {
    overallText,
    cons,
    pros,
  },
}, res) => {
  try {
    await addOpinion({ candidateId, userId, overallText, cons, pros });
    res.send(200);
  } catch (e) {
    console.log(e);
    res.send(400);
  }
};
