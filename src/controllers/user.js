import UserModel from "../models/user.js";

const UserController = {
	create: async (req, res) => {
		try {
			const id = req.params.id;
			const { name, email, phone, address } = req.body;
			const newUser = new UserModel({
				name,
				email,
				phone,
				address,
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
    }

};

export default UserController;
