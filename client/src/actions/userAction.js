import axios from 'axios';

export const registerUser = (user) => async (dispatch) => {
	dispatch({ type: 'USER_REGISTER_REQUEST' });

	try {
		await axios.post('/api/users/register', user);
		dispatch({ type: 'USER_REGISTER_SUCCESS' });
	} catch (error) {
		dispatch({ type: 'USER_REGISTER_FAILURE', payload: error });
	}
};

export const loginUser = (user) => async (dispatch) => {
	dispatch({ type: 'USER_LOGIN_REQUEST' });

	try {
		const response = await axios.post('/api/users/login', user);

		dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data });
		localStorage.setItem('currentUser', JSON.stringify(response.data));
		window.location.href = '/';
	} catch (error) {
		dispatch({ type: 'USER_LOGIN_FAILURE', payload: error });
	}
};

export const logoutUser = () => (dispatch) => {
	localStorage.removeItem('currentUser');
	window.location.href = '/login';
};

export const getAllUser = () => async (dispatch) => {
	dispatch({ type: 'GET_ALL_USER_REQUEST' });

	try {
		const response = await axios.get('/api/users/get-all-user');
		dispatch({ type: 'GET_ALL_USER_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_ALL_USER_FAILURE', payload: error });
	}
};

export const deleteUser = (userId) => async (dispatch) => {
	try {
		await axios.post('/api/users/delete-user', { userId });
		window.location.reload();
	} catch (error) {
		console.log(error);
	}
};
