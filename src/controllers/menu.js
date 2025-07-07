import MenuModel from "../models/menu.js";

const MenuController = {
	create: async (req, res) => {
		try {
			const { name, description, price, image, category, available } = req.body;
			const newMenu = new MenuModel({
				name,
				description,
				price,
				image,
                category,
                available
			});
			const savedMenu = await newMenu.save();
			res.status(201).json({
				allOk: true,
				message: "Menu item created successfully",
				data: savedMenu,
			});
		} catch (error) {
			res.status(500).json({
				allOk: false,
				message: "Error creating menu item",
				error: error.message,
			});
		}
	},

	readAll: async (req, res) => {
		try {
			const menuItems = await MenuModel.find();
			res.status(200).json({
				allOk: true,
				message: "Menu items fetched successfully",
				data: menuItems,
			});
		} catch (error) {
			res.status(500).json({
				allOk: false,
				message: "Error fetching menu items",
				error: error.message,
			});
		}
	},

	readOne: async (req, res) => {
		const { id } = req.params;
		try {
			const item = await MenuModel.findById(id);
			if (!item) {
				return res.status(404).json({
					allOk: false,
					message: `Menu with id ${id} not found`,
				});
			}
			res.status(200).json({
				allOk: true,
				message: `Menu with id ${id} fetched successfully`,
				data: item,
			});
		} catch (error) {
			res.status(500).json({
				allOk: false,
				message: `Error fetching menu with id ${id}`,
				error: error.message,
			});
		}
	},

	update: async (req, res) => {
		try {
			const { id } = req.params;
			const { name, description, price, image, category, available } = req.body;
			const updatedMenu = await MenuModel.findByIdAndUpdate(id, {
				name,
				description,
				price,
				image,
				category,
				available
			});
            if (!updatedMenu) {
				return res.status(404).json({
					allOk: false,
					message: `Menu with id ${id} not found`,
					data: null,
				});
			}
			res.status(200).json({
				allOk: true,
				message: `Menu with id ${id} updated successfully`,
				data: updatedMenu,
			});

		} catch (error) {
			res.status(500).json({
				allOk: false,
				message: `Error updating menu with id ${id}`,
				error: error.message,
			});
		}
	},

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedMenu = await MenuModel.findByIdAndDelete(id);
            if (!deletedMenu) {
				return res.status(404).json({
					allOk: false,
					message: `Menu with id ${id} not found`,
					data: null,
				});
			}
            res.status(200).json({
                allOk: true,
                message: `Menu with id ${id} deleted successfully`,
                data: deletedMenu,
            });     
            
        } catch (error) {
			res.status(500).json({
				allOk: false,
				message: `Error deleting menu with id ${id}`,
				error: error.message,
			});
		}

    },
};

export default MenuController;
