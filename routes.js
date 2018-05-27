var express = require('express');
var router = express.Router();

var checkLogin = require('./middlewares/check.js').checkLogin;

// var userController = require('./controller/user.js');
var foodController = require('./controller/menu.js');
var restController = require('./controller/rest.js');
var routeController = require('./controller/route.js');
var helpController = require('./controller/help.js');
var feedbackController = require('./controller/feedback.js');

// router.post('/getInterfaceListByProjectID', function(req, res, next) {
//     console.log('params', req);
//     console.log('req.body', req.body);
// }); 

/* 菜单 */
router.post('/getAllMenu', foodController.getAll);
router.post('/addMenu', foodController.addMenu);
router.post('/delMenu', foodController.delMenu);
router.post('/updateMenu', foodController.updateMenu);

// 食堂
router.post('/getAllRestrant', foodController.getAllRestrant);
router.post('/addRestrant', foodController.addRestrant);
router.post('/delRestrant', foodController.delRestrant);
router.post('/updateRestrant', foodController.updateRestrant);

// // 房间
// router.post('/getAllRoom', restController.getAll);
// router.post('/addRoom', restController.addRoom);
// router.post('/delRoom', restController.delRoom);
// router.post('/updateRoom', restController.updateRoom);

// // 房间-室友
// router.post('/getAllRoomMate', restController.getAll);
// router.post('/addRoomMate', restController.addRoomMate);
// router.post('/delRoomMate', restController.delRoomMate);
// router.post('/updateRoomMate', restController.updateRoomMate);

// // 路线
// router.post('/getAllRoutesInside', routeController.getAll);
// router.post('/addRoutesInside', routeController.addMenu);
// router.post('/delRoutesInside', routeController.delMenu);
// router.post('/updateRoutesInside', routeController.updateMenu);

// // 路线-校外
// router.post('/getAllRoutesOutside', routeController.getAll);
// router.post('/addRoutesOutside', routeController.addMenu);
// router.post('/delRoutesOutside', routeController.delMenu);
// router.post('/updateRoutesOutside', routeController.updateMenu);

// // 医疗
// router.post('/getAllHelpCommon', helpController.getAll);
// router.post('/addHelpCommon', helpController.addMenu);
// router.post('/delHelpCommon', helpController.delMenu);
// router.post('/updateHelpCommon', helpController.updateMenu);

// // 医疗求助
// router.post('/getAllHelpCall', helpController.getAll);
// router.post('/addHelpCall', helpController.addMenu);
// router.post('/delHelpCall', helpController.delMenu);
// router.post('/updateHelpCall', helpController.updateMenu);

// // 问题反馈
// router.post('/getAllFeedBack', feedbackController.getAll);
// router.post('/addFeedBack', feedbackController.addMenu);
// router.post('/delFeedBack', feedbackController.delMenu);
// router.post('/updateFeedBack', feedbackController.updateMenu);

module.exports = router;