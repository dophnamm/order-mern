const mongoose = require('mongoose');

const usersSchema = mongoose.Schema(
	{
		name: { type: String, require },
		email: { type: String, require },
		password: { type: String, require },
		isAdmid: { type: Boolean, require, default: false },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('users', usersSchema);
