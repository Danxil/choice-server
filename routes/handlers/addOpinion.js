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
  await addOpinion({ candidateId, userId, overallText, cons, pros });
  res.send(200);
};
