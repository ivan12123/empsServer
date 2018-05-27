var modelHelp = require('../lib/mongo').Help;

module.exports = {
    create: function create(Help) {
        console.log('Help', Help)
        return modelHelp.create(Help).exec();
    },
    getAll: function getAll() {
        return modelHelp.find().exec();
    },
    getHelpByName: function getHelpByName(name) {
        return modelHelp.find({
            foodname: name
        }).exec();
    },
    deleteHelp: function deleteHelp(_id) {
        console.log('22222删除id：' + _id)
        return modelHelp.remove({
            _id: _id
        }).exec();
    },
    updateHelp: function deleteHelp(params) {
        console.log('params', params)
        return modelHelp.update({
            _id: params._id
        }, { $set: { name: params.name, 
                     price: params.price,
                     source: params.source,
                     make: params.make } }).exec();
    },
};