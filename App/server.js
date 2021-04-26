const Router = require('./Lib/router');
const controller = require('./Modules/User/user.controller').UserController;
const http = require('http');
const router = new Router.Router();
router.get('/Users/one', controller().findOne)
router.get('/Users/all', controller().findAll)
router.put('/Users/create', controller().create)
router.put('/Users/update', controller().update)
router.delete('/Users/delete', controller().delete)

const server = http.createServer(async (req, res) => {
    const user = await router.handleRequest(
        {
            method: 'GET', url: '/Users/one',
            body: {id: '1hr1r2p8knvm8r6a'}
        }
    )
    res.end(`id: ${user.data.id}, name: ${user.data.name}, isAdmin: ${user.data.isAdmin}`)
})

server.listen(3000, () => console.log('Server has been started...'))

// server.addListener('doGet', ({url, cb})=>router.get(url,cb));
// server.emit('doGet',{url:'/Users/create', db:controller().create});