const { Router } = require("express")
const { add, getall} = require("../controller/register.control");

const router = Router();

router.post("/register", add);
router.get("/register", getall);

module.exports = router;