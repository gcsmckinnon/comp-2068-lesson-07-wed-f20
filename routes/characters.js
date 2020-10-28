const { index, show, search } = require('../controllers/characters');

module.exports = router => {
  router.get('/characters/', index);
  router.get('/characters/:id(\\d+)', show);
  router.get('/characters/search/:name', search);

  return router;
};