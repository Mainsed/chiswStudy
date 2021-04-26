const Router = require('./lib/router').Router;
const controller = require('./modules/user/user.controller').UserController;

const router = new Router();

router.get('/users/one', controller().findOne)
router.get('/users/all', controller().findAll)
router.put('/users/create', controller().create)
router.put('/users/update', controller().update)
router.delete('/users/delete', controller().delete)
exports.handleRequest = router.handleRequest.bind(router);
