var modelRest = require('../lib/mongo').Restrant;

module.exports = {
    create: function create(Rest) {
        console.log('Rest', Rest)
        return modelRest.create(Rest).exec();
    },
    getAll: function getAll() {
        return modelRest.find().exec();
    },
    getRestByName: function getRestByName(name) {
        return modelRest.find({
            foodname: name
        }).exec();
    },
    deleteRest: function deleteRest(_id) {
        console.log('22222删除id：' + _id)
        return modelRest.remove({
            _id: _id
        }).exec();
    },
    updateRest: function deleteRest(params) {
        console.log('params', params)
        return modelRest.update({
            _id: params._id
        }, { $set: { name: params.name, 
                     price: params.price,
                     source: params.source,
                     make: params.make } }).exec();
    },
};