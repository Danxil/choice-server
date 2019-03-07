export default () => (req, res) => {
  req.logout();
  res.clearCookie('connect.sid', { domain: req.headers.host, path: '/' });
  res.sendStatus(200);
};
