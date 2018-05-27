var modelMenu = require('../lib/mongo').Menu;

module.exports = {
    create: function create(Menu) {
        console.log('menu', Menu)
        return modelMenu.create(Menu).exec();
    },
    getAll: function getAll() {
        return modelMenu.find().exec();
    },
    getMenuByName: function getMenuByName(name) {
        return modelMenu.find({
            foodname: name
        }).exec();
    },
    deleteMenu: function deleteMenu(_id) {
        console.log('22222删除id：' + _id)
        return modelMenu.remove({
            _id: _id
        }).exec();
    },
    updateMenu: function deleteMenu(params) {
        console.log('params', params)
        return modelMenu.update({
            _id: params._id
        }, { $set: { name: params.name, 
                     price: params.price,
                     source: params.source,
                     make: params.make } }).exec();
    },
};