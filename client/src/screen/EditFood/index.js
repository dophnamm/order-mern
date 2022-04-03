import React, { useEffect, useState } from 'react';
import './style.scss';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { editFoods, getFoodById } from '../../actions/foodAction';
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditFood() {
	const currentFood = useSelector((state) => state.getFoodByIdRuducer);
	const editFoodInit = useSelector((state) => state.editFoodReducer);
	const { food } = currentFood;
	const { editLoading } = editFoodInit;

	const [name, setName] = useState('');
	const [small, setSmall] = useState('');
	const [medium, setMedium] = useState('');
	const [large, setLarge] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [image, setImage] = useState('');
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (food) {
			if (food._id === params.foodId) {
				setName(food?.name);
				setSmall(food?.prices[0].small);
				setMedium(food?.prices[0].medium);
				setLarge(food?.prices[0].large);
				setDescription(food?.description);
				setCategory(food?.category);
				setImage(food?.image);
			} else {
				dispatch(getFoodById(params.foodId));
			}
		} else {
			dispatch(getFoodById(params.foodId));
		}

		if (editLoading) {
			toast.success('Edit successfully .');
			setTimeout(() => {
				navigate('/admin');
			}, 2000);
		}
	}, [food, dispatch, editLoading, navigate, params.foodId]);

	function handleSubmit(e) {
		e.preventDefault();
		const editFood = {
			_id: params.foodId,
			name,
			description,
			image,
			category,
			prices: { small, medium, large },
		};

		dispatch(editFoods(editFood));
	}
	return (
		<div className='edit-food'>
			<div className='container'>
				<h1>Edit Food</h1>
				<div className='edit-food-container'>
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
							Edit food
						</Button>
					</Form>
				</div>
			</div>

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

export default EditFood;
