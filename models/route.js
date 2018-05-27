var modelRoute = require('../lib/mongo').Route;

module.exports = {
    create: function create(Route) {
        console.log('Route', Route)
        return modelRoute.create(Route).exec();
    },
    getAll: function getAll() {
        return modelRoute.find().exec();
    },
    getRouteByName: function getRouteByName(name) {
        return modelRoute.find({
            foodname: name
        }).exec();
    },
    deleteRoute: function deleteRoute(_id) {
        console.log('22222删除id：' + _id)
        return modelRoute.remove({
            _id: _id
        }).exec();
    },
    updateRoute: function deleteRoute(params) {
        console.log('params', params)
        return modelRoute.update({
            _id: params._id
        }, { $set: { name: params.name, 
                     price: params.price,
                     source: params.source,
                     make: params.make } }).exec();
    },
};