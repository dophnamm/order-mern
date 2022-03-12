import React from 'react';
import './Category.scss';
import categorys from './categorydata';
import { RiArrowUpDownFill } from 'react-icons/ri';

function Category() {
	return (
		<div id='category'>
			<div className='container padding'>
				<div className='category__container'>
					<button className='btn-btn button__filter'>
						<RiArrowUpDownFill />
					</button>

					<div className='category__button-list'>
						<div className='row-row'>
							{categorys.map((category, index) => {
								return (
									<button
										className='btn-btn button-category'
										key={index}
									>
										<img
											className='category__image'
											src={category.icon}
											alt={category.name}
										/>
										<span className='category__name'>
											{category.name}
										</span>
									</button>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Category;
