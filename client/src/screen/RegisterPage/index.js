import React, { useState } from 'react';
import './style.scss';
import { Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../actions/userAction';
import Success from '../../components/Success/index';

function RegisterPage() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const registerState = useSelector((state) => state.registerReducer);
	const { success } = registerState;

	const dispatch = useDispatch();

	function handleSubmit(e) {
		e.preventDefault();
		if (password !== confirmPassword) {
			toast.error('Confirm password is incorrect, please enter again.');
			setPassword('');
			setConfirmPassword('');
			return;
		}

		const user = {
			name,
			email,
			password,
		};
		dispatch(registerUser(user));

		setName('');
		setEmail('');
		setPassword('');
		setConfirmPassword('');
	}

	return (
		<>
			<div className='register'>
				<div className='container'>
					<h1>REGISTER</h1>
					<div className='register__container'>
						{success && <Success text={'Create account successfully.'} />}
						<Form typeof='submit' onSubmit={(e) => handleSubmit(e)}>
							<Form.Group className='mb-3' controlId='formBasicName'>
								<Form.Label>Name</Form.Label>
								<Form.Control
									type='name'
									required
									placeholder='Enter name'
									value={name}
									onChange={(e) =>
										setName(e.target.value)
									}
								/>
							</Form.Group>

							<Form.Group className='mb-3' controlId='formBasicEmail'>
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type='email'
									required
									placeholder='Enter email'
									value={email}
									onChange={(e) =>
										setEmail(e.target.value)
									}
								/>
							</Form.Group>

							<Form.Group className='mb-3' controlId='formBasicPassword'>
								<Form.Label>Password</Form.Label>
								<Form.Control
									type='password'
									placeholder='Enter password'
									required
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</Form.Group>

							<Form.Group
								className='mb-3'
								controlId='formBasicConfirmPassword'
							>
								<Form.Label>Confirm password</Form.Label>
								<Form.Control
									type='password'
									required
									placeholder='Confirm password'
									value={confirmPassword}
									onChange={(e) =>
										setConfirmPassword(
											e.target.value
										)
									}
								/>
							</Form.Group>

							<Button variant='primary' size='md' type='submit'>
								Register
							</Button>
						</Form>
					</div>
				</div>
			</div>

			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				closeOnClick={true}
				pauseOnHover={true}
				draggable={true}
				progress={undefined}
			/>
		</>
	);
}

export default RegisterPage;
