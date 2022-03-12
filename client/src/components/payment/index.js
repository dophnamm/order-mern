import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import Checkout from '../Checkout';

function Payment() {
	const cartItems = useSelector((state) => state.addToCartReducer);
	const cart = cartItems.cartItems;

	const subTotal = cart.length > 0 ? cart.reduce((x, item) => x + item.price, 0) : 0;

	return (
		<div className='payment'>
			<h5>Summary</h5>

			<div className='payment__container'>{subTotal}</div>

			<Checkout subTotal={subTotal} />
		</div>
	);
}

export default Payment;
