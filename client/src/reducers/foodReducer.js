const initial = {
	food: [],
};

export const getAllFoodRuducer = (state = initial, action) => {
	switch (action.type) {
		case 'GET_FOOD_REQUEST':
			return {
				loading: true,
				...state,
			};

		case 'GET_FOOD_SUCCESS':
			return {
				loading: false,
				food: action.payload,
			};

		case 'GET_FOOD_FAILURE':
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const getFoodByIdRuducer = (state = {}, action) => {
	switch (action.type) {
		case 'GET_FOODBYID_REQUEST':
			return {
				loading: true,
				...state,
			};

		case 'GET_FOODBYID_SUCCESS':
			return {
				loading: false,
				food: action.payload,
			};

		case 'GET_FOODBYID_FAILURE':
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const addFoodReducer = (state = initial, action) => {
	switch (action.type) {
		case 'ADD_FOOD_REQUEST':
			return {
				loading: true,
				...state,
			};

		case 'ADD_FOOD_SUCCESS':
			return {
				loading: false,
				success: true,
			};

		case 'ADD_FOOD_FAILURE':
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const editFoodReducer = (state = {}, action) => {
	switch (action.type) {
		case 'EDIT_FOOD_REQUEST':
			return {
				editLoading: true,
				...state,
			};

		case 'EDIT_FOOD_SUCCESS':
			return {
				editLoading: false,
				editSuccess: true,
			};

		case 'EDIT_FOOD_FAILURE':
			return {
				editLoading: false,
				editError: action.payload,
			};

		default:
			return state;
	}
};
