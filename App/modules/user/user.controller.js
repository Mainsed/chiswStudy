const service = require('./user.service').UserService

function UserController() {
    return {
        findAll: async function() {
            const data = await service().findAll();
            return {
                data,
                statusCode: data ? 200 : 204,
                statusMessage: data ? http.STATUS_CODES['200'] : http.STATUS_CODES['204']
            }
        },
        findOne: async function (id) {
            const data = await service().findOne(id);
            return {
                data,
                statusCode: data ? 200 : 204,
                statusMessage: data ? http.STATUS_CODES['200'] : http.STATUS_CODES['204']
            }
        },
        create: async function (name) {
            const data = await service().create(name);
            return {
                data,
                statusCode: data ? 201 : 400,
                statusMessage: data ? http.STATUS_CODES['201'] : http.STATUS_CODES['400']
            }
        },
        update: async function (id, newContent) {
            const data = await service().update(id, newContent);
            return {
                data,
                statusCode: data ? 200 : 204,
                statusMessage: data ? http.STATUS_CODES['200'] : http.STATUS_CODES['204']
            }
        },
        delete: async function (id) {
            const data = await service().delete(id)
            return {
                data,
                statusCode: data ? 200 : 204,
                statusMessage: data ? http.STATUS_CODES['200'] : http.STATUS_CODES['204']
            }
        }
    }
}

exports.UserController = UserController;