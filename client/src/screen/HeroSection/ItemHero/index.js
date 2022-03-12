import React from 'react';
import './ItemHero.scss';

function ItemHero({ title, coupon, images }) {
	const convertTitle = title.split('.');

	return (
		<div className='item'>
			<div className='block-item'>
				<div className='item__about'>
					<div className='item__title'>
						{convertTitle[0]}. <br />
						{convertTitle[1]}
					</div>
					<span className='item__coupon'>{coupon}</span>
				</div>
				<img src={images} className='item__img' alt={title} />
			</div>
		</div>
	);
}

export default ItemHero;
