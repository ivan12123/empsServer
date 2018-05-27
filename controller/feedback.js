var rapBack = require('../models/feedback');

module.exports = {
    getAll: function(req, res, next) {
        rapBack.getAll().then(function(result) {
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
        rapBack.getBackByName(params).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    },
    addBack: function(req, res, next) {
        var params = {
            name: req.body.name,
            price: req.body.price,
            source: req.body.source,
            make: req.body.make
        };

        rapBack.create(params).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    },
    delBack: function(req, res, next) {
        var _id = req.body._id

        console.log('删除id：' + _id)
        rapBack.deleteBack(_id).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    },
    updateBack: function(req, res, next) {
        var params = {
            _id: req.body._id,
            name: req.body.name,
            price: req.body.price,
            source: req.body.source,
            make: req.body.make
        };

        console.log('更新' + params)
        rapBack.updateBack(params).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    }
};