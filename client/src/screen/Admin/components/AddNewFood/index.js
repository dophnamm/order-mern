import React, { useEffect, useState } from 'react';
import './style.scss';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addFood } from '../../../../actions/foodAction';
import { ToastContainer, toast } from 'react-toastify';

function AddNewFood() {
	const addFoodState = useSelector((state) => state.addFoodReducer);
	const { success } = addFoodState;

	const [name, setName] = useState('');
	const [small, setSmall] = useState('');
	const [medium, setMedium] = useState('');
	const [large, setLarge] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [image, setImage] = useState('');

	const dispatch = useDispatch();

	function handleSubmit(e) {
		e.preventDefault();
		const food = {
			name,
			description,
			image,
			category,
			prices: { small, medium, large },
		};

		dispatch(addFood(food));
	}

	useEffect(() => {
		if (success) {
			toast.success('Add food successfully .');
			setName('');
			setSmall('');
			setMedium('');
			setLarge('');
			setDescription('');
			setCategory('');
			setImage('');
		}
	}, [dispatch, success]);

	return (
		<div className='add-food'>
			<Form typeof='submit' onSubmit={(e) => handleSubmit(e)}>
				<Form.Group className='mb-3' controlId='formBasicName'>
					<Form.Control
						type='text'
						required
						placeholder='Enter name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='small'>
					<Form.Control
						required
						type='number'
						placeholder='Enter small varient price'
						value={small}
						onChange={(e) => setSmall(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='medium'>
					<Form.Control
						required
						type='number'
						placeholder='Enter medium varient price'
						value={medium}
						onChange={(e) => setMedium(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='large'>
					<Form.Control
						required
						type='number'
						placeholder='Enter large varient price'
						value={large}
						onChange={(e) => setLarge(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='desctiption'>
					<Form.Control
						required
						type='text'
						placeholder='Enter description'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='category'>
					<Form.Control
						required
						type='text'
						placeholder='Enter category'
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='image'>
					<Form.Control
						required
						type='text'
						placeholder='Enter image url'
						value={image}
						onChange={(e) => setImage(e.target.value)}
					/>
				</Form.Group>

				<Button variant='primary' size='md' type='submit'>
					Add Food
				</Button>
			</Form>

			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				closeOnClick={true}
				pauseOnHover={true}
				draggable={true}
				progress={undefined}
			/>
		</div>
	);
}

export default AddNewFood;
