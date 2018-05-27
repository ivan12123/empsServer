var rapMenu = require('../models/menu');

module.exports = {
    getAll: function(req, res, next) {
        rapMenu.getAll().then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    },
    getByParam: function(req, res, next) {
        var params = {
            name: req.body.content
        };
        rapMenu.getMenuByName(params).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    },
    addMenu: function(req, res, next) {
        var params = {
            name: req.body.name,
            price: req.body.price,
            source: req.body.source,
            make: req.body.make
        };

        rapMenu.create(params).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    },
    delMenu: function(req, res, next) {
        var _id = req.body._id

        console.log('删除id：' + _id)
        rapMenu.deleteMenu(_id).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    },
    updateMenu: function(req, res, next) {
        var params = {
            _id: req.body._id,
            name: req.body.name,
            price: req.body.price,
            source: req.body.source,
            make: req.body.make
        };

        console.log('更新' + params)
        rapMenu.updateMenu(params).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    }
};