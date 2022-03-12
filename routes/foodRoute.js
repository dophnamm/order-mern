const express = require('express');
const router = express.Router();
const Food = require('../models/foodModel');

router.get('/getallfood', async (req, res) => {
	try {
		const response = await Food.find({});
		res.send(response);
	} catch (error) {
		return res.status(400).json({
			errCode: -1,
			message: 'Get data failure ...',
		});
	}
});

router.post('/add-food', async (req, res) => {
	const food = req.body.food;
	try {
		const newFood = new Food({
			name: food.name,
			description: food.description,
			varients: ['small', 'medium', 'large'],
			image: food.image,
			category: food.category,
			prices: [food.prices],
		});

		await newFood.save();
		res.send('Add food success');
	} catch (error) {
		return res.status(400).json({
			errCode: -1,
			errMessage: 'Add food failure ....',
		});
	}
});

router.post('/getfoodbyid', async (req, res) => {
	const foodId = req.body.foodId;

	try {
		const food = await Food.findOne({ _id: foodId });
		res.send(food);
	} catch (error) {
		return res.status(400).json({
			errCode: -1,
			errMessage: 'get data edit food failure ....',
		});
	}
});

router.post('/edit-food', async (req, res) => {
	const editFood = req.body.editFood;

	try {
		const food = await Food.findOne({ _id: editFood._id });

		food.name = editFood.name;
		food.description = editFood.description;
		food.image = editFood.image;
		food.category = editFood.category;
		food.prices = [editFood.prices];

		await food.save();
		res.send('Update successfully !');
	} catch (error) {
		return res.status(400).json({
			errCode: -1,
			errMessage: 'Update food failure ....',
			error,
		});
	}
});

router.post('/delete-food', async (req, res) => {
	const foodId = req.body.foodId;
	try {
		await Food.findOneAndDelete({ _id: foodId });
		res.send('Delete successfully !');
	} catch (error) {
		return res.status(400).json({
			errCode: -1,
			errMessage: 'Delete food failure ....',
			error,
		});
	}
});

module.exports = router;
