import axios from 'axios';

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
	dispatch({ type: 'PLACE_ORDER_REQUEST' });
	const currentUser = getState().loginReducer.currentUser;
	const cartItems = getState().addToCartReducer.cartItems;

	try {
		await axios.post('/api/orders/placeorder', { token, subTotal, currentUser, cartItems });
		dispatch({ type: 'PLACE_ORDER_SUCCESS' });
	} catch (error) {
		console.log(error);
		dispatch({ type: 'PLACE_ORDER_FAILURE' });
	}
};

export const getUserOrder = () => async (dispatch, getState) => {
	const currentUser = getState().loginReducer.currentUser;
	dispatch({ type: 'GET_USER_ORDER_REQUEST' });

	try {
		const response = await axios.post('/api/orders/getuser', { userId: currentUser._id });
		dispatch({ type: 'GET_USER_ORDER_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_USER_ORDER_FAILURE', payload: error });
	}
};

export const getAllOrder = () => async (dispatch) => {
	dispatch({ type: 'GET_ALL_ORDER_REQUEST' });

	try {
		const response = await axios.get('/api/orders/get-all-orders');
		dispatch({ type: 'GET_ALL_ORDER_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_ALL_ORDER_FAILURE', payload: error });
	}
};

export const deliverOrder = (orderId) => async (dispatch) => {
	try {
		await axios.post('/api/orders/deliver-order', { orderId });
	} catch (error) {
		console.log(error);
	}
};
