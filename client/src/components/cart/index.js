import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../Footer';
import Payment from '../payment';
import CartItem from './components/CartItem';

function Cart() {
	const cartItems = useSelector((state) => state.addToCartReducer);
	const data = cartItems.cartItems;
	return (
		<>
			<div className='cart' style={{ minHeight: '80vh' }}>
				<div className='container'>
					<div className='cart__container'>
						<h1 className='cart__title'>Your cart</h1>

						<div className='row-row'>
							<div className='col-7'>
								<div className='cart__body'>
									<h5>Products</h5>

									{data.length > 0 ? (
										<>
											{data.map(
												(
													item,
													idx
												) => (
													<CartItem
														key={
															idx
														}
														data={
															item
														}
													/>
												)
											)}
										</>
									) : (
										<h1>No data</h1>
									)}
								</div>
							</div>

							<div className='col-3'>
								<Payment />
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default Cart;
