const service = require('./user.service').UserService

function UserController() {
    return {
        findAll: async function() {
            const data = await service().findAll();
            return {
                data,
                statusCode: data ? 200 : 204,
                statusMessage: data ? 'Successfully' : 'No content to show'
            }
        },
        findOne: async function (id) {
            const data = await service().findOne(id);
            return {
                data,
                statusCode: data ? 200 : 204,
                statusMessage: data ? 'Successfully' : "User doesn't exist"
            }
        },
        create: async function (name) {
            const data = await service().create(name);
            return {
                data,
                statusCode: data ? 201 : 400,
                statusMessage: data ? 'Successfully created' : 'Invalid data'
            }
        },
        update: async function (id, newContent) {
            const data = await service().update(id, newContent);
            return {
                data,
                statusCode: data ? 200 : 204,
                statusMessage: data ? 'Successfully updated' : "User doesn't exist"
            }
        },
        delete: async function (id) {
            const data = await service().delete(id)
            return {
                data,
                statusCode: data ? 200 : 204,
                statusMessage: data ? 'Successfully deleted' : 'No content to delete'
            }
        }
    }
}

exports.UserController = UserController;