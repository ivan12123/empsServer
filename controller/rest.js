var rapRest = require('../models/rest');

module.exports = {
    getAll: function(req, res, next) {
        rapRest.getAll().then(function(result) {
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
        rapRest.getRestByName(params).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    },
    addRest: function(req, res, next) {
        var params = {
            name: req.body.name,
            price: req.body.price,
            source: req.body.source,
            make: req.body.make
        };

        rapRest.create(params).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    },
    delRest: function(req, res, next) {
        var _id = req.body._id

        console.log('删除id：' + _id)
        rapRest.deleteRest(_id).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    },
    updateRest: function(req, res, next) {
        var params = {
            _id: req.body._id,
            name: req.body.name,
            price: req.body.price,
            source: req.body.source,
            make: req.body.make
        };

        console.log('更新' + params)
        rapRest.updateRest(params).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    }
};