import OrderModel from "../models/order.js";


const OrderController = {
    create: async (req, res) => {
        try {
        const { user, items, totalAmount, status } = req.body;
        const newOrder = new OrderModel({
            user,
            items,
            totalAmount,
            status
        });
        const savedOrder = await newOrder.save();
        res.status(201).json({
            allOk: true,
            message: "Order created successfully",
            data: savedOrder,
        });
        } catch (error) {
            res.status(500).json({
                allOk: false,
                message: "Error creating order",
                error: error.message,
            });
        }


    }
}




export default OrderController;