import React, { useState } from 'react';
import './Pizza.scss';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cartAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Pizza({ pizza }) {
	const { name, image, prices, varients, description } = pizza;
	const [varient, setVarient] = useState('small');
	const [quantity, setQuantity] = useState('1');
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleOnChangeVarient = (e) => {
		setVarient(e.target.value);
	};

	const handleOnChangeQuantity = (e) => {
		setQuantity(e.target.value);
	};

	const handleAddToCart = () => {
		toast.success('Add to carr successfully');
		dispatch(addToCart(pizza, quantity, varient));
	};

	return (
		<div className='item__pizza'>
			<div className='item__block'>
				<img src={image} className='item__image' alt={name} onClick={() => handleShow()} />

				<div className='item__description'>
					<h4 className='item__name'>{name}</h4>

					<div className='item__option'>
						<div className='item__varient'>
							<p>Size</p>
							<select
								className='form-control'
								value={varient}
								onChange={(e) => handleOnChangeVarient(e)}
							>
								{varients.map((varient, index) => {
									return (
										<option
											key={index}
											value={varient}
											onChange={(e) => {
												handleOnChangeQuantity(
													e
												);
											}}
										>
											{varient}
										</option>
									);
								})}
							</select>
						</div>

						<div className='item__quantity'>
							<p>Quantity</p>
							<select
								className='form-control'
								value={quantity}
								onChange={(e) => {
									handleOnChangeQuantity(e);
								}}
							>
								{Array.from(
									{ length: 10 },
									(_, idx) => idx + 1
								).map((number, index) => {
									return (
										<option
											key={index}
											value={number}
										>
											{number}
										</option>
									);
								})}
							</select>
						</div>
					</div>

					<div className='item__price'>
						<p>{prices[0][varient] * Number(quantity)}$</p>

						<button
							className='btn-btn button__add'
							onClick={() => handleAddToCart(name)}
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>

			<Modal show={show} onHide={handleClose} centered>
				<img src={image} alt={name} />
				<Modal.Body>{description}</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>

			<ToastContainer
				position='top-right'
				autoClose={1000}
				hideProgressBar={false}
				closeOnClick={true}
				pauseOnHover={true}
				draggable={true}
				progress={undefined}
			/>
		</div>
	);
}

export default Pizza;
