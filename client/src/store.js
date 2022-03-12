import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllFoodRuducer, getFoodByIdRuducer, addFoodReducer, editFoodReducer } from './reducers/foodReducer';
import { addToCartReducer } from './reducers/cartReducer';
import { registerReducer, loginReducer, getAllUserRuducer } from './reducers/userReducer.js';
import { placeOrderReducer, getUserOrderRuducer, getAllOrderRuducer } from './reducers/orderReducer';

const finalReducer = combineReducers({
	getAllFoodRuducer,
	addToCartReducer,
	registerReducer,
	loginReducer,
	placeOrderReducer,
	getUserOrderRuducer,
	addFoodReducer,
	getFoodByIdRuducer,
	editFoodReducer,
	getAllOrderRuducer,
	getAllUserRuducer,
});

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : [];

const initialState = {
	loginReducer: {
		currentUser,
	},
};
const compose = composeWithDevTools({});

const store = createStore(finalReducer, initialState, compose(applyMiddleware(thunk)));

export default store;
