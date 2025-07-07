import { Schema, model } from "mongoose";

const orderSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		items: [
			{
				menuItem: {
					type: Schema.Types.ObjectId,
					ref: "Menu",
					required: true,
				},
				quantity: {
					type: Number,
					required: true,
					min: 1,
				},
			},
		],
		totalAmount: {
			type: Number,
			required: true,
			min: 0,
		},
		status: {
			type: String,
			enum: ["pending", "completed", "cancelled"],
			default: "pending",
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

export default model("Order", orderSchema);
