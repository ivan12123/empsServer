var modelBack = require('../lib/mongo').FeedBack;

module.exports = {
    create: function create(Back) {
        console.log('Back', Back)
        return modelBack.create(Back).exec();
    },
    getAll: function getAll() {
        return modelBack.find().exec();
    },
    getBackByName: function getBackByName(name) {
        return modelBack.find({
            foodname: name
        }).exec();
    },
    deleteBack: function deleteBack(_id) {
        console.log('22222删除id：' + _id)
        return modelBack.remove({
            _id: _id
        }).exec();
    },
    updateBack: function deleteBack(params) {
        console.log('params', params)
        return modelBack.update({
            _id: params._id
        }, { $set: { name: params.name, 
                     price: params.price,
                     source: params.source,
                     make: params.make } }).exec();
    },
};