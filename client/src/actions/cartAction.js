export const addToCart = (food, quantity, varient) => (dispatch, getState) => {
	const cartItems = {
		_id: food._id,
		name: food.name,
		image: food.image,
		varient: varient,
		quantity: quantity,
		prices: food.prices,
		price: food.prices[0][varient] * quantity,
	};

	dispatch({ type: 'ADD_TO_CART', payload: cartItems });
};

export const deleteFromCart = (food) => (distpach) => {
	distpach({
		type: 'DELETE_FROM_CART',
		payload: food,
	});
};
