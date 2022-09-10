var express = require("express");
var controller = require("../controller/Cmain");
var controllerV = require("../controller/CVisitor");
const router = express.Router();

router.get("/", controller.main);
router.post("/get/axios", controller.login);

var controllerV = require("../controller/CVisitor");
router.get("/visitor", controllerV.visitor);

router.post("/visitor/post", controllerV.post_visitor);
router.post("/visitor/delete", controllerV.delete_visitor);
router.post("/visitor/get", controllerV.get_visitor);
router.post("/visitor/update", controllerV.update_visitor);

var controllerT = require("../controller/Signup");
router.post("/task/post", controllerT.post_task);
router.get("/task", controllerT.task);
router.post("/login/post", controllerT.post_login);
router.post("/task/delete", controllerT.delete_inform);





// router.get("/get", controller.get_test)
// router.post("/get/ajax", controller.test);
// router.get("/get/fetch", controller.testttt);

module.exports = router;