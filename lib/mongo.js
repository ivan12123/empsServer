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

// 饮食
exports.Menu = mongolass.model('Menu', {
    name: { type: 'string' },
    price: { type: 'string' },
    source: { type: 'string' },
    make: { type: 'string'}
});
exports.Restrant = mongolass.model('Restrant', {
    name: { type: 'string' },
    route: { type: 'string' },
    desc: { type: 'string' }
});
// 住宿
exports.Room = mongolass.model('Room', {
    code: { type: 'string' },
    size: { type: 'string' },
    position: { type: 'string' },
    facility: { type: 'string'},
    desc: { type: 'string'}
});
exports.RoomMate = mongolass.model('RoomMate', {
    name: { type: 'string' },
    desc: { type: 'string' }
});
// 路线
exports.Route = mongolass.model('Route', {
    name: { type: 'string' },
    desc: { type: 'string' }
});
exports.RouteOutside = mongolass.model('RouteOutside', {
    name: { type: 'string' },
    desc: { type: 'string' }
});
// 医疗
exports.HelpCall = mongolass.model('HelpCall', {
    name: { type: 'string' },
    telephone: { type: 'string' },
    desc: { type: 'string' }
});
exports.HelpCommon = mongolass.model('HelpCommon', {
    name: { type: 'string' },
    desc: { type: 'string' }
});
// 反馈
exports.FeedBack = mongolass.model('FeedBack', {
    type: { type: 'string' },
    content: { type: 'string' },
    telephone: { type: 'string' }
});

