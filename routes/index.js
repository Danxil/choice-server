import path from 'path';
import signUpHandler from './handlers/signUp';
import userHandler from './handlers/user';
import logoutHandler from './handlers/logout';
import businessConfigHandler from './handlers/businessConfig';
import getAdminStatistic from './handlers/getAdminStatistic';
import getOpinionsHandler from './handlers/getOpinions';
import getCandidatesHandler from './handlers/getCandidates';
import deleteVoteHandler from './handlers/deleteVote';
import addVoteHandler from './handlers/addVote';

const authorization = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.send(401);
  }
  return next();
};

const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.send(403);
  }
  return next();
};

export default ({ app }) => {
  app.get(`${process.env.API_PREFIX}/admin-statistic`, authorization, isAdmin, getAdminStatistic());
  app.post(`${process.env.API_PREFIX}/sign-up`, signUpHandler());
  app.get(`${process.env.API_PREFIX}/user`, authorization, userHandler());
  // app.get(`${process.env.API_PREFIX}/users`, authorization, userHandler());
  app.get(`${process.env.API_PREFIX}/logout`, authorization, logoutHandler());
  app.get(`${process.env.API_PREFIX}/business-config`, businessConfigHandler());
  app.get(`${process.env.API_PREFIX}/candidates`, getCandidatesHandler());
  app.get(`${process.env.API_PREFIX}/candidates/:candidateId/opinions`, getOpinionsHandler());
  app.delete(`${process.env.API_PREFIX}/users/:userId/opinions/:opinionId/votes`, deleteVoteHandler());
  app.post(`${process.env.API_PREFIX}/users/:userId/opinions/:opinionId/votes`, addVoteHandler());
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'client', 'index.html'));
  });
};
