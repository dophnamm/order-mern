const iniState = {};

export const registerReducer = (state = iniState, action) => {
	switch (action.type) {
		case 'USER_REGISTER_REQUEST':
			return {
				loading: true,
			};
		case 'USER_REGISTER_SUCCESS':
			return {
				loading: false,
				success: true,
			};
		case 'USER_REGISTER_FAILURE':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const loginReducer = (state = iniState, action) => {
	switch (action.type) {
		case 'USER_LOGIN_REQUEST':
			return {
				loading: true,
			};
		case 'USER_LOGIN_SUCCESS':
			return {
				loading: false,
				success: true,
				currentUser: action.payload,
			};
		case 'USER_LOGIN_FAILURE':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const getAllUserRuducer = (state = { users: [] }, action) => {
	switch (action.type) {
		case 'GET_ALL_USER_REQUEST':
			return {
				loading: true,
				...state,
			};

		case 'GET_ALL_USER_SUCCESS':
			return {
				loading: false,
				users: action.payload,
			};

		case 'GET_ALL_USER_FAILURE':
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
