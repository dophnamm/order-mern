import axios from 'axios';

export const getAllFood = () => async (dispatch) => {
	dispatch({ type: 'GET_FOOD_REQUEST' });

	try {
		const response = await axios.get('/api/food/getallfood');
		dispatch({ type: 'GET_FOOD_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_FOOD_FAILURE', payload: error });
	}
};

export const getFoodById = (foodId) => async (dispatch) => {
	dispatch({ type: 'GET_FOODBYID_REQUEST' });

	try {
		const response = await axios.post('/api/food/getfoodbyid', { foodId });
		dispatch({ type: 'GET_FOODBYID_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_FOODBYID_FAILURE', payload: error });
	}
};

export const addFood = (food) => async (dispatch) => {
	dispatch({ type: 'ADD_FOOD_REQUEST' });
	try {
		await axios.post('/api/food/add-food/', { food });

		dispatch({ type: 'ADD_FOOD_SUCCESS' });
	} catch (error) {
		dispatch({ type: 'ADD_FOOD_FAILURE', payload: error });
	}
};

export const editFoods = (editFood) => async (dispatch) => {
	dispatch({ type: 'EDIT_FOOD_REQUEST' });

	try {
		await axios.post('/api/food/edit-food', { editFood });
		dispatch({ type: 'EDIT_FOOD_SUCCESS' });
	} catch (error) {
		dispatch({ type: 'EDIT_FOOD_FAILURE', payload: error });
	}
};

export const deleteFood = (foodId) => async (dispatch) => {
	try {
		await axios.post('/api/food/delete-food', { foodId });
	} catch (error) {
		console.log(error);
	}
};
