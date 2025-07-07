import { Router } from "express";
import MenuController from "../controllers/menu.js";


const menuRouter = Router();

menuRouter.post("/", MenuController.create);
menuRouter.get("/", MenuController.readAll);
menuRouter.get("/:id", MenuController.readOne);
menuRouter.put("/:id", MenuController.update);
menuRouter.delete("/:id", MenuController.delete);




export default menuRouter;
