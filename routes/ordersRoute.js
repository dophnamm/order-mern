const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')(
	'sk_test_51KZIajA03ke4NqV0F9CoEXp7XYDX1sjLPQpsYn4coYGwtIJWpXmIua9irEEvLwYw05gYAbi9skGtn9FTFmh6Eb0R00xJsu85Wb'
);
const Order = require('../models/ordersModel');

router.post('/placeorder', async (req, res) => {
	const { token, subTotal, currentUser, cartItems } = req.body;

	try {
		const customer = await stripe.customers.create({
			email: token.email,
			source: token.id,
		});

		const payment = await stripe.charges.create(
			{
				amount: subTotal,
				currency: 'usd',
				customer: customer.id,
				receipt_email: token.email,
			},
			{
				idempotencyKey: uuidv4(),
			}
		);

		if (payment) {
			const newOrder = new Order({
				name: currentUser.name,
				email: currentUser.email,
				userId: currentUser._id,
				orderItems: cartItems,
				orderAmount: subTotal,
				shippingAddress: {
					street: token.card.address_line1,
					city: token.card.address_city,
					country: token.card.address_country,
					pincode: token.card.address_zip,
				},
				transactionId: payment.source.id,
			});

			newOrder.save();
		} else {
			res.send('payment failure');
		}
	} catch (error) {
		return res.status(400).json({
			errCode: -1,
			errMessage: 'Payment failure ....',
		});
	}
});

router.post('/getuser', async (req, res) => {
	const { userId } = req.body;

	try {
		const order = await Order.find({ userId: userId });
		res.send(order);
	} catch (error) {
		return res.status(400).json({
			errCode: -1,
			errMessage: 'Some thing went wrong ...',
		});
	}
});

router.get('/get-all-orders', async (req, res) => {
	try {
		const response = await Order.find({});
		res.send(response);
	} catch (error) {
		return res.status(400).json({
			errCode: -1,
			errMessage: 'Some thing went wrong ...',
		});
	}
});

router.post('/deliver-order', async (req, res) => {
	const orderId = req.body.orderId;

	try {
		const order = await Order.findOne({ _id: orderId });
		order.isDelivered = true;
		await order.save();
		res.send('Order deliver successfully');
	} catch (error) {
		return res.status(400).json({
			errCode: -1,
			errMessage: 'Some thing went wrong ...',
		});
	}
});

module.exports = router;
