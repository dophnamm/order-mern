import React, { useEffect } from 'react';
import './HomeScreen.scss';
import Pizza from '../../components/Pizza';
import Category from '../Category';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFood } from '../../actions/foodAction';
import Hero from '../../screen/HeroSection/index';
import HashLoader from 'react-spinners/HashLoader';
import Footer from '../../components/Footer';

function HomeScreen() {
	const dispatch = useDispatch();
	const foodState = useSelector((state) => state.getAllFoodRuducer);

	const { food, loading } = foodState;

	useEffect(() => {
		dispatch(getAllFood());
	}, [dispatch]);

	return (
		<>
			<Hero />
			<div id='home'>
				<div className='container section'>
					<div className='home__container'>
						<h1>Delivery</h1>

						<Category />

						<div className='padding'>
							<div className='row-row'>
								{loading ? (
									<div className='loading'>
										<HashLoader
											size={100}
											color='#FFA518'
										/>
									</div>
								) : (
									food &&
									food.length > 0 &&
									food.map((pizza, index) => {
										return (
											<Pizza
												pizza={
													pizza
												}
												key={
													index
												}
											/>
										);
									})
								)}
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default HomeScreen;
