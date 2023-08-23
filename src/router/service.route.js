const { Router } = require("express")
const { add, getall, getbyid} = require("../controller/service.control");
const isAuth = require("../middleware/login.middleware");

const router = Router();

router.post("/service", isAuth, add);
router.get("/service", isAuth, getall);
router.get("/service/:id", isAuth, getbyid);

module.exports = router;
