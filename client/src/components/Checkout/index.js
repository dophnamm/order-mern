import React from 'react';
import { Button } from '@material-ui/core';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../../actions/orderAction';
import { ToastContainer, toast } from 'react-toastify';

function Checkout({ subTotal }) {
	const dispatch = useDispatch();
	const orderState = useSelector((state) => state.placeOrderReducer);
	const { success } = orderState;

	if (success) {
		toast.success('Order successfully');
	}

	function handleToken(token) {
		dispatch(placeOrder(token, subTotal));
	}

	return (
		<>
			<StripeCheckout
				amount={subTotal}
				shippingAddress
				token={handleToken}
				stripeKey={process.env.REACT_APP_CHEC_PUBLIC_KEY}
				currency='USD'
			>
				<Button>Pay now</Button>
			</StripeCheckout>

			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				closeOnClick={true}
				pauseOnHover={true}
				draggable={true}
				progress={undefined}
			/>
		</>
	);
}

export default Checkout;
