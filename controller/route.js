var rapRoute = require('../models/route');

module.exports = {
    getAll: function(req, res, next) {
        rapRoute.getAll().then(function(result) {
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
        rapRoute.getRouteByName(params).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    },
    addRoute: function(req, res, next) {
        var params = {
            name: req.body.name,
            price: req.body.price,
            source: req.body.source,
            make: req.body.make
        };

        rapRoute.create(params).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    },
    delRoute: function(req, res, next) {
        var _id = req.body._id

        console.log('删除id：' + _id)
        rapRoute.deleteRoute(_id).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    },
    updateRoute: function(req, res, next) {
        var params = {
            _id: req.body._id,
            name: req.body.name,
            price: req.body.price,
            source: req.body.source,
            make: req.body.make
        };

        console.log('更新' + params)
        rapRoute.updateRoute(params).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    }
};