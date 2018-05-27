var express = require('express');
var router = express.Router();

var checkLogin = require('./middlewares/check.js').checkLogin;

// var userController = require('./controller/user.js');
var menuController = require('./controller/menu.js');

// router.post('/getInterfaceListByProjectID', function(req, res, next) {
//     console.log('params', req);
//     console.log('req.body', req.body);
// }); 

/* User */
router.post('/getAllMenu', menuController.getAll);
router.post('/addMenu', menuController.addMenu);
router.post('/delMenu', menuController.delMenu);
router.post('/updateMenu', menuController.updateMenu);
// router.post('/getAllMenu', function(req, res, next) {
//     console.log('params', req);
//     console.log('req.body', req.body);
// }); 
// router.post('/login', userController.login);
// router.post('/registe', userController.registe);
// router.post('/resetPwd', userController.resetPwd);
/* Example */
// router.post('/mock/projectId/11', function(req, res, next) {
//     console.log(req);
// });

module.exports = router;