import { Router } from "express";
import UserController from "../controllers/user.js";


const userRouter = Router();

userRouter.post("/", UserController.create);
userRouter.get("/", UserController.readAll);
userRouter.get("/:id", UserController.readOne);
userRouter.put("/:id", UserController.update);
userRouter.delete("/:id", UserController.delete);

export default userRouter;
