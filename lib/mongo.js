var config = require('config-lite');
var Mongolass = require('mongolass');
var mongolass = new Mongolass();
mongolass.connect(config.mongodb);

exports.User = mongolass.model('User', {
    name: { type: 'string' },
    password: { type: 'string' },
    email: { type: 'string' },
    avatar: { type: 'string' },
    gender: { type: 'string', enum: ['m', 'f', 'x'] },
    bio: { type: 'string' }
});

exports.Menu = mongolass.model('Menu', {
    name: { type: 'string' },
    price: { type: 'string' },
    source: { type: 'string' },
    make: { type: 'string'}
});

exports.FeedBack = mongolass.model('FeedBack', {
    fbtype: { type: 'string' },
    fbcontent: { type: 'string' }
});

