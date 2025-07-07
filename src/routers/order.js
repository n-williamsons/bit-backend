import { Router } from "express";
import OrderController from "../controllers/order.js";


const orderRouter = Router();

orderRouter.post("/", OrderController.create);



export default orderRouter;
