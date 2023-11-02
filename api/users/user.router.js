const {createUser,getUserByUserId,getUsers,updateUSer,deleteUser,login} = require("./user.controller");
const router = require("express").Router();
const {} = require("../../auth/token_validation")

router.post("/",createUser);
router.get("/",getUsers);
router.get("/:id",getUserByUserId);
router.put("/",updateUSer);
router.delete("/:id",deleteUser)
router.post("/login",login);


module.exports = router;