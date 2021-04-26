class Router {
    constructor() {
        this.body = []
    }

    get(url, handler) {
        this.body.push({url, handler, method: 'GET'})
    }

    put(url, handler) {
        this.body.push({url, handler, method: 'PUT'})
    }

    post(url, handler) {
        this.body.push({url, handler, method: 'POST'})
    }

    delete(url, handler) {
        this.body.push({url, handler, method: 'DELETE'})
    }

    async handleRequest(req, res) {
        for (let i in this.body)
            if (req.method === this.body[i].method && req.url === this.body[i].url)
                res.data = await this.body[i].handler(req.body)
        return res.data;
    }
}

exports.Router = Router;