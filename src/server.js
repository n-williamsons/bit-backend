import "dotenv/config";
import connectDB from "./config/db.js";
import express from "express";
import morgan from "morgan";
import menuRouter from "./routers/menu.js";
import orderRouter from "./routers/order.js";
import userRouter from "./routers/user.js";



// Initialize the server
const server = express();
const port = process.env.PORT;
const host = process.env.HOST;

// Middlewares
server.use(morgan("dev"));
server.use(express.json());
server.use("/menu", menuRouter);
server.use("/order", orderRouter);
server.use("/user", userRouter);



connectDB();



server.get("/", (req, res) => {
    res.send("Welcome to the Restaurant API!");
});


server.listen(port, () => {
	console.log(`Server is running on ${host}:${port}`);
});
