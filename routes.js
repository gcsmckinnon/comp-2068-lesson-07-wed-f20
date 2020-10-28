module.exports = router => {
  require('./routes/pages')(router);
  require('./routes/characters')(router);

  return router;
};