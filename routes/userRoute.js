const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/register', async (req, res) => {
	const { name, email, password } = req.body;
	const newUser = new User({ name, email, password });

	try {
		await newUser.save();
		res.send('User register successfully .');
	} catch (error) {
		return res.status(400).json({
			errCode: -1,
			errMessage: error,
		});
	}
});

router.post('/login', async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.find({ email, password });
		if (user.length > 0) {
			const currentUser = {
				name: user[0].name,
				email: user[0].email,
				isAdmid: user[0].isAdmid,
				_id: user[0]._id,
			};

			res.send(currentUser);
		} else {
			return res.status(400).json({ message: 'User login failure' });
		}
	} catch (error) {
		return res.status(400).json({
			errCode: -1,
			errMessage: error,
		});
	}
});

router.get('/get-all-user', async (req, res) => {
	try {
		const users = await User.find({});
		res.send(users);
	} catch (error) {
		return res.status(400).json({
			messageError: error,
		});
	}
});

router.post('/delete-user', async (req, res) => {
	const userId = req.body.userId;

	try {
		await User.findByIdAndDelete({ _id: userId });
		res.send('Delete successfully');
	} catch (error) {
		return res.status(400).json({
			messageError: error,
		});
	}
});

module.exports = router;
