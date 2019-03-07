import path from 'path';
import signUpHandler from './handlers/signUp';
import userHandler from './handlers/user';
import logoutHandler from './handlers/logout';
import businessConfigHandler from './handlers/businessConfig';
import getAdminStatistic from './handlers/getAdminStatistic';
import getOpinionsHandler from './handlers/getOpinions';
import addOpinionHandler from './handlers/addOpinion';
import getCandidatesHandler from './handlers/getCandidates';
import deleteVoteHandler from './handlers/deleteVote';
import addVoteHandler from './handlers/addVote';
import getMetaHandler from './handlers/getMeta';
import verifyOpinionHandler from './handlers/verifyOpinion';
import deleteOpinionHandler from './handlers/deleteOpinion';
import verifyUserHandler from './handlers/verifyUser';
import deleteUserHandler from './handlers/deleteUser';
import getNotVerifiedUsersHandler from './handlers/getNotVerifiedUsers';

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
  app.get(`${process.env.API_PREFIX}/meta`, getMetaHandler());
  app.get(`${process.env.API_PREFIX}/opinions`, authorization, isAdmin, getOpinionsHandler());
  app.get(`${process.env.API_PREFIX}/candidates/:candidateId/opinions`, getOpinionsHandler());
  app.post(`${process.env.API_PREFIX}/candidates/:candidateId/opinions`, authorization, addOpinionHandler());
  app.delete(`${process.env.API_PREFIX}/users/:userId/opinions/:opinionId/votes`, authorization, deleteVoteHandler());
  app.post(`${process.env.API_PREFIX}/users/:userId/opinions/:opinionId/votes`, authorization, addVoteHandler());
  app.put(`${process.env.API_PREFIX}/opinions/:opinionId/verify`, authorization, isAdmin, verifyOpinionHandler());
  app.delete(`${process.env.API_PREFIX}/opinions/:opinionId`, authorization, isAdmin, deleteOpinionHandler());
  app.put(`${process.env.API_PREFIX}/users/:userId/verify`, authorization, isAdmin, verifyUserHandler());
  app.delete(`${process.env.API_PREFIX}/users/:userId`, authorization, isAdmin, deleteUserHandler());
  app.get(`${process.env.API_PREFIX}/users`, authorization, isAdmin, getNotVerifiedUsersHandler());
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'client', 'index.html'));
  });
};
