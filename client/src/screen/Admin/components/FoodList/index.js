import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFood, deleteFood } from '../../../../actions/foodAction';
import { Table } from 'react-bootstrap';
import HashLoader from 'react-spinners/HashLoader';
import './style.scss';
import { BsFillTrash2Fill } from 'react-icons/bs';
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function FoodList() {
	const dispatch = useDispatch();
	const foodState = useSelector((state) => state.getAllFoodRuducer);

	const { food, loading } = foodState;

	useEffect(() => {
		dispatch(getAllFood());
	}, [dispatch]);

	function handleDelete(id) {
		dispatch(deleteFood(id));
		setTimeout(() => {
			window.location.reload();
		}, 2000);
	}

	return (
		<div className='foodList'>
			{loading ? (
				<div className='loading'>
					<HashLoader size={100} color='#FFA518' />
				</div>
			) : (
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Name</th>
							<th>Prices</th>
							<th>Category</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody>
						{food &&
							food.length > 0 &&
							food.map((item) => {
								const { _id, name, prices, category } = item;

								return (
									<tr key={_id}>
										<td>{name}</td>
										<td>
											Small:{' '}
											{prices[0]['small']}{' '}
											<br />
											Medium:{' '}
											{
												prices[0][
													'medium'
												]
											}{' '}
											<br />
											Large:{' '}
											{
												prices[0][
													'large'
												]
											}{' '}
											<br />
										</td>
										<td>{category}</td>
										<td className='custom-td'>
											<Link
												to={`/admin/edit-food/${_id}`}
											>
												<FaPencilAlt />
											</Link>
											<BsFillTrash2Fill
												onClick={() =>
													handleDelete(
														_id
													)
												}
											/>
										</td>
									</tr>
								);
							})}
					</tbody>
				</Table>
			)}
		</div>
	);
}

export default FoodList;
