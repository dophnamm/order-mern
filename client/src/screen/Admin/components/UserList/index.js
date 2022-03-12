import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser, deleteUser } from '../../../../actions/userAction';
import { AiFillDelete } from 'react-icons/ai';
import HashLoader from 'react-spinners/HashLoader';

function UserList() {
	const dispatch = useDispatch();
	const usersState = useSelector((state) => state.getAllUserRuducer);
	const { loading, users } = usersState;

	useEffect(() => {
		dispatch(getAllUser());
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
							<th>User ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody>
						{users?.map((user) => {
							const { _id, name, email } = user;

							return (
								<tr key={_id}>
									<td>{_id}</td>
									<td>{name}</td>
									<td>{email}</td>
									<td>
										<Button
											onClick={() =>
												dispatch(
													deleteUser(
														_id
													)
												)
											}
										>
											<AiFillDelete />
										</Button>
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
export default UserList;
