var rapHelp = require('../models/help');

module.exports = {
    getAll: function(req, res, next) {
        rapHelp.getAll().then(function(result) {
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
        rapHelp.getHelpByName(params).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    },
    addHelp: function(req, res, next) {
        var params = {
            name: req.body.name,
            price: req.body.price,
            source: req.body.source,
            make: req.body.make
        };

        rapHelp.create(params).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    },
    delHelp: function(req, res, next) {
        var _id = req.body._id

        console.log('删除id：' + _id)
        rapHelp.deleteHelp(_id).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    },
    updateHelp: function(req, res, next) {
        var params = {
            _id: req.body._id,
            name: req.body.name,
            price: req.body.price,
            source: req.body.source,
            make: req.body.make
        };

        console.log('更新' + params)
        rapHelp.updateHelp(params).then(function(result) {
            res.send({
                result: result,
                success: true
            });
        }).catch(next);
    }
};