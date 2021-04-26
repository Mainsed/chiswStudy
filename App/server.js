const http = require('http');

const handleRequest = require('./routing').handleRequest;

const server = http.createServer(async (req, res) => {
    if(req.url !== '/') {
        const id = req.url.includes('?') ? req.url.match(/(\?.+=)(.+)/)[2] : '';
        const url = req.url.match(/[^?]+/)[0];
        const user = await handleRequest(
            {
                method: req.method, url,
                body: {id}
            }, res)
        console.log(user)
    }
    res.end('Start')
})

server.listen(3000, () => console.log('Server has been started...'))

http.get(`http:/localhost:3000/users/one?id=1hr1r2p8knvm8r6a`)
http.get(`http:/localhost:3000/users/all`)