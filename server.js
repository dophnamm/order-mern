const express = require('express');
const db = require('./db.js');
const food = require('./models/foodModel');

const app = express();
app.use(express.json());

const foodRoute = require('./routes/foodRoute');
const userRoute = require('./routes/userRoute');
const ordersRoute = require('./routes/ordersRoute');

app.use('/api/food/', foodRoute);
app.use('/api/users/', userRoute);
app.use('/api/orders/', ordersRoute);

app.get('/', (req, res) => {
	res.send('Server working');
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server runnig on port ${port}`);
