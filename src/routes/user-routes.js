const Router = require("express").Router;

const UserController = require("../controllers/user-controller.js");

const userRouter = Router();

userRouter.get("/users", UserController.getUsers);
userRouter.get("/users/:userId", UserController.getOneUser);
userRouter.post("/users", UserController.createUser);
userRouter.patch("/users/:userId", UserController.updateUser);
userRouter.delete("/users/:userId", UserController.deleteUser);

module.exports = userRouter;
