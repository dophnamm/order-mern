const { default: mongoose } = require('mongoose');

const mongooseURL = 'mongodb+srv://dophnamm:120900Namm@cluster0.yog60.mongodb.net/mern-oerder';

mongoose.connect(mongooseURL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('connected', () => {
	console.log('Mongo DB Connection Successfully !');
});

db.on('error', () => {
	console.log('Mongo DB Connection Failure !');
});

module.exports = mongoose;
