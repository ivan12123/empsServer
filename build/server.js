var express = require('express');
var basicConfig = require('../config/index.js');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var sessionConfig = require('../config/index.js');
var cors = require('cors');

var app = express();
var port = basicConfig.port || 8081

app.use(session({
    name: sessionConfig.session.key, // 设置 cookie 中保存 session id 的字段名称
    secret: sessionConfig.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
    resave: true, // 强制更新 session
    saveUninitialized: false, // 设置为 false，强制创建一个 session，即使用户未登录
    cookie: {
        maxAge: sessionConfig.session.maxAge // 过期时间，过期后 cookie 中的 session id 自动删除
    }
}));

// 添加模板必需的三个变量
app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    next();
});

// 解析 application/json, 用来格式化XHR请求数据，如req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

/*
 * 设置允许跨域
 * 前期前后端服务分离，端口不一致添加的。
 * 现在前后端统一了，没什么用了
 */
app.use(cors()); 
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     next();
// });

// 接口路由
app.use('/api', require('../routes.js'));


app.listen(port, function() {
    console.log('listening at http://localhost:8081/main.html');
});
