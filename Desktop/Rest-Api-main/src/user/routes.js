const { Router } = require("express");
const { addUser, login } = require("./controller");
const { hashPass, unHash, decrypt } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.post("/login", unHash, login);
userRouter.get("/user", decrypt, login);

module.exports = userRouter;
