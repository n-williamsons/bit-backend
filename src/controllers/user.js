import bcrypt from "bcryptjs";
import UserModel from "../models/user.js";
import { generateToken } from "../utils/token.js";

const UserController = {
	create: async (req, res) => {
		try {
			const { name, email, phone, password } = req.body;
			
			if(!name || !email || !phone || !password) {
				return res.status(400).json({
					allOk: false,
					message: "All fields are required",
					data: null,
				});
			}
			
			const encryptedPassword = await bcrypt.hash(password, 10);

			const existingUser = await UserModel.findOne({ email });
			if (existingUser) {
				return res.status(400).json({
					allOk: false,
					message: "User already exists, please use a different email",
					data: null,
				});
			}

			const newUser = new UserModel({
				name,
				email,
				phone,
				password: encryptedPassword,
			});

			const savedUser = await newUser.save();
			res.status(201).json({
				allOk: true,
				message: `User ${savedUser.id} created successfully`,
				data: savedUser,
			});
		} catch (error) {
			res.status(500).json({
				allOk: false,
				message: "Error creating user",
				data: error.message,
			});
		}
	},

	readAll: async (req, res) => {
		try {
			const users = await UserModel.find();
			res.status(200).json({
				allOk: true,
				message: "Users fetched successfully",
				data: users,
			});
		} catch (error) {
			res.status(500).json({
				allOk: false,
				message: "Error fetching users",
				data: error.message,
			});
		}
	},

	readOne: async (req, res) => {
		const { id } = req.params;
		try {
			const user = await UserModel.findById(id);
			if (!user) {
				return res.status(404).json({
					allOk: false,
					message: `User with Id: ${id} not found`,
				});
			}
			res.status(200).json({
				allOk: true,
				message: `User with Id: ${id} fetched successfully`,
				data: user,
			});
		} catch (error) {
			res.status(500).json({
				allOk: false,
				message: "Error fetching users",
				data: error.message,
			});
		}
	},

	update: async (req, res) => {
		try {
			const adminUser = "admin";
			const { id } = req.params;
			const { name, email, phone, address } = req.body;

			if (!name || !email || !phone || !address) {
				return res.status(400).json({
					allOk: false,
					message: "All fields are required",
					data: null,
				});
			}

			// Validar que el usuario actual no sea admin
            const currentUser = await UserModel.findById(id);
			if (currentUser.name.toLowerCase() === adminUser.toLowerCase()) {
				return res.status(403).json({
					allOk: false,
					message: "Admin users cannot be updated",
					data: null,
				});
			}

			const updatedUser = await UserModel.findByIdAndUpdate(
				id,
				{
					name,
					email,
					phone,
					address,
				},
				{ new: true }
			);

			res.status(200).json({
				allOk: true,
				message: `User with Id: ${id} updated successfully`,
				data: updatedUser,
			});
		} catch (error) {
			res.status(500).json({
				allOk: false,
				message: "Error updating user",
				data: error.message,
			});
		}
	},

    delete: async (req, res) => {
        try {
            const adminUser = "admin";
            const { id } = req.params;
            
            const currentUser = await UserModel.findById(id);
            if (currentUser.name.toLowerCase() === adminUser.toLowerCase()) {
                return res.status(403).json({
                    allOk: false,
                    message: "Admin users cannot be deleted",
                    data: null,
                });
            }
            const deletedUser = await UserModel.findByIdAndDelete(id);
            if (!deletedUser) {
                return res.status(404).json({
                    allOk: false,
                    message: `User with Id: ${id} not found`,
                    data: null,
                });
            }
            res.status(200).json({
                allOk: true,
                message: `User with Id: ${id} deleted successfully`,
                data: null,
            });
        } catch (error) {
            res.status(500).json({
                allOk: false,
                message: "Error deleting user",
                data: error.message,
            });
        }
    },

	login: async (req, res) => {
		try {
			const { email, password } = req.body;

			if (!email || !password) {
				return res.status(400).json({
					allOk: false,
					message: "Email and password are required",
					data: null,
				});
			}


		const userFound = await UserModel.findOne({ email });

		if (!userFound) {
			return res.status(404).json({
				allOk: false,
				message: "User not found",
				data: null,
			});
		}else {
				const isPasswordValid = await bcrypt.compare(
					password, 
					userFound.password
				);

				if (isPasswordValid){
					const token = await generateToken({id: userFound._id,name: userFound.name, email: userFound.email});
					console.log(token);
					if (token) {
						res.status(200).json({
							allOk: true,
							message: "User logged in successfully",
							data: token,
						});
					} else {
						res.status(500).json({
							allOk: false,
							message: "Error generating token",
							data: null,
						});
					}
				} else {
					res.status(401).json({
						allOk: false,
						message: "Unauthorized",
						data: null,
					});
				}
			}
			
		} catch (error) {
			res.status(500).json({
				allOk: false,
				message: "Error during login",
				data: error.message,
			});
		}
	},

	logout: (req, res) => {
		res.status(200).json({
			allOk: true,
			message: "User logged out successfully",
			data: null,
		});
	},




};

export default UserController;
