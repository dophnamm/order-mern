import React from 'react';
import './style.scss';
import { AiOutlineDelete } from 'react-icons/ai';
import { addToCart, deleteFromCart } from '../../../../actions/cartAction';
import { useDispatch } from 'react-redux';

function CartItem({ data }) {
	const { image, name, price, varient, quantity } = data;
	const distpach = useDispatch();
	return (
		<div className='cartItem'>
			<img src={image} alt={name} className='cartItem__img' />

			<div className='cartItem__info'>
				<h3 className='cartItem__name'>{name}</h3>
				<p className='cartItem__size'>Size : {varient}</p>
				<p className='cartItem__price'>Price : {price}</p>
				<p className='cartItem__quantity'>
					Quantity :
					<button
						className='quantity__modifier quantity__modifier--left'
						disabled={quantity <= 1 ? true : false}
						onClick={() => {
							distpach(addToCart(data, +data.quantity - 1, data.varient));
						}}
					>
						&mdash;
					</button>{' '}
					{quantity}
					<button
						className='quantity__modifier quantity__modifier--right'
						onClick={() => {
							distpach(addToCart(data, +data.quantity + 1, data.varient));
						}}
					>
						&#xff0b;
					</button>
				</p>
			</div>

			<div className='cartItem__delete' onClick={() => distpach(deleteFromCart(data))}>
				<AiOutlineDelete className='icon' /> Delete
			</div>
		</div>
	);
}

export default CartItem;
