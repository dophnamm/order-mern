import './App.scss';
import Header from './components/Header';
import HomeScreen from './screen/HomeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart';
import LoginPage from './screen/LoginPage';
import RegisterPage from './screen/RegisterPage';
import OrderScreen from './screen/OrderScreen';
import Admin from './screen/Admin';
import EditFood from './screen/EditFood';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/orders' element={<OrderScreen />} />
					<Route path='/admin' element={<Admin />} />
					<Route path='/admin/edit-food/:foodId' element={<EditFood />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
