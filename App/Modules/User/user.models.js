const fileWorker = require('../../Lib/fileWorker').fileWorker
const uniqid = require('uniqid');
const USERS = 'Users';

function UserModels() {
    this.fileWorker = new fileWorker(USERS);
    return {
        findAll: async () => {
            return this.fileWorker.getAll(USERS)
        },

        findOne: async ({id}) => {
            return this.fileWorker.get(USERS, id)
        },
        create: async ({name}) => {
            return this.fileWorker.createEntity(USERS, {id: uniqid(), name})
        },
        update: async ({id, ...data}) => {
            return this.fileWorker.updateEntity(USERS, id, data)
        },
        delete: async ({id}) => {
            return this.fileWorker.deleteEntity(USERS, id)
        }
    }
}

exports.UserModels = UserModels;