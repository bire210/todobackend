const express = require("express");
const { registerControler, loginControler } = require("../controllers/userControler");
const userRouter = express.Router();

userRouter.post("/register",registerControler );
userRouter.post("/login", loginControler);

module.exports = userRouter;
