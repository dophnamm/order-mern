import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrder } from '../../actions/orderAction';
import HashLoader from 'react-spinners/HashLoader';
import CartItem from '../../components/cart/components/CartItem';
import './style.scss';

function OrderScreen() {
	const dispatch = useDispatch();
	const dataOrder = useSelector((state) => state.getUserOrderRuducer);
	const { loading, orders } = dataOrder;

	useEffect(() => {
		dispatch(getUserOrder());
	}, [dispatch]);

	return (
		<div className='order'>
			<div className='container'>
				<div className='order_container'>
					{loading ? (
						<div className='loading'>
							<HashLoader size={100} color='#FFA518' />
						</div>
					) : (
						<>
							<h1>My Orders</h1>
							{orders && orders.length > 0 ? (
								<>
									<div className='order-address'>
										<h1>Address</h1>
										{orders.length > 0 && (
											<>
												<h1>
													city:{' '}
													{
														orders[0]
															.shippingAddress
															.city
													}
												</h1>
												<h1>
													country:{' '}
													{
														orders[0]
															.shippingAddress
															.country
													}
												</h1>
												<h1>
													street:{' '}
													{
														orders[0]
															.shippingAddress
															.street
													}
												</h1>
											</>
										)}
									</div>
									{orders.map((items) => {
										const { orderItems, _id } =
											items;

										return (
											<div
												key={_id}
												className='order-item'
											>
												{orderItems.map(
													(
														order
													) => {
														const {
															_id,
														} =
															order;
														return (
															<>
																<CartItem
																	key={
																		_id
																	}
																	data={
																		order
																	}
																/>
															</>
														);
													}
												)}
											</div>
										);
									})}
								</>
							) : (
								<h1>Nodata</h1>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default OrderScreen;
