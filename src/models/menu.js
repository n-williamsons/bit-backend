import { Schema, model } from "mongoose";

const menuSchema = new Schema(
	{
        name: {
            type: String,
            required: true,
            
        },
        description: {
            type: String,
            required: true,
            
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        image: {
            type: String,
            required: true,
            
        },
        category: {
            type: String,
            enum: ["appetizer", "main course", "dessert", "beverage"],
            required: true,
        },
        available: {
            type: Boolean,
            default: true,
        },
    },
	{
		versionKey: false,
		timestamps: true,
	}
);


export default model("Menu", menuSchema);