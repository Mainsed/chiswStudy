const Router = require('./Lib/router')
const controller = require('./Modules/User/user.controller').UserController
const router = new Router.Router();
router.get('/Users/one', controller().findOne)
router.get('/Users/all', controller().findAll)
router.put('/Users/create', controller().create)
router.put('/Users/update', controller().update)
router.delete('/Users/delete', controller().delete)
const http = require('http');
http.createServer(router.handleRequest(
    {
        method: 'PUT', url: '/Users/update',
        body: {id:'1hr1r2p8knvm8r6a', name:'James Koul', isAdmin: true}
    }
).then((res)=>console.log(res)))