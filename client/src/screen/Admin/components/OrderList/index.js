import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrder } from '../../../../actions/orderAction';
import HashLoader from 'react-spinners/HashLoader';
import { Table, Button } from 'react-bootstrap';
import { deliverOrder } from '../../../../actions/orderAction';

function OrderList() {
	const dispatch = useDispatch();
	const ordersState = useSelector((state) => state.getAllOrderRuducer);
	const { loading, orders } = ordersState;

	useEffect(() => {
		dispatch(getAllOrder());
	}, [dispatch]);

	return (
		<>
			{loading ? (
				<div className='loading'>
					<HashLoader size={100} color='#FFA518' />
				</div>
			) : (
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Order ID</th>
							<th>Email</th>
							<th>UserID</th>
							<th>Amout</th>
							<th>Status</th>
						</tr>
					</thead>

					<tbody>
						{orders?.map((order) => {
							const { _id, email, userId, orderAmount, isDelivered } =
								order;

							return (
								<tr key={_id}>
									<td>{_id}</td>
									<td>{email}</td>
									<td>{userId}</td>
									<td>{orderAmount}</td>
									<td>
										{isDelivered ? (
											<Button
												variant='success'
												disable
											>
												Delivered
											</Button>
										) : (
											<Button
												variant='secondary'
												onClick={() =>
													dispatch(
														deliverOrder(
															_id
														)
													)
												}
											>
												Deliver
											</Button>
										)}
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			)}
		</>
	);
}

export default OrderList;
