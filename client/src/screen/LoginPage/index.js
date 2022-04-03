import React, { useEffect, useState } from 'react';
import './style.scss';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/userAction';
import ErrorAlert from '../../components/Error';
import SuccessAlert from '../../components/Success';

function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const loginState = useSelector((state) => state.loginReducer);
	const { error, success } = loginState;

	useEffect(() => {
		if (localStorage.getItem('currentUser')) {
			window.location.href = '/';
		}
	}, []);

	function handleSubmit(event) {
		event.preventDefault();
		const user = { email, password };

		dispatch(loginUser(user));
	}

	return (
		<div className='login'>
			<div className='container'>
				<h1>LOGIN</h1>

				<div className='login__container'>
					{error && <ErrorAlert text={'Incorrect password or account name'} />}
					{success && <SuccessAlert text={'Logic successfully'} />}

					<Form typeof='submit'>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicCheckbox'>
							<Link to='/register'>
								<Form.Text className='text-muted'>
									Register ?
								</Form.Text>
							</Link>
						</Form.Group>
						<div className='text-center'>
							<Button
								variant='primary'
								size='md'
								type='submit'
								onClick={(event) => handleSubmit(event)}
							>
								Login
							</Button>
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
