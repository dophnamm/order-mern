import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import UserList from './components/UserList';
import FoodList from './components/FoodList';
import AddNewFood from './components/AddNewFood';
import OrderList from './components/OrderList';

function Admin() {
	return (
		<div className='admin'>
			<div className='container'>
				<div className='admin_container'>
					<h1 className='text-center'>Admin Panel</h1>

					<Tabs
						defaultActiveKey='profile'
						id='uncontrolled-tab-example'
						className='mb-3 mt-3 d-flex justify-content-around'
					>
						<Tab eventKey='userList' title='User List'>
							<UserList />
						</Tab>
						<Tab eventKey='foodList' title='Food List'>
							<FoodList />
						</Tab>
						<Tab eventKey='addNewFood' title='Add New Food'>
							<AddNewFood />
						</Tab>
						<Tab eventKey='orderList' title='Order List'>
							<OrderList />
						</Tab>
					</Tabs>
				</div>
			</div>
		</div>
	);
}

export default Admin;
