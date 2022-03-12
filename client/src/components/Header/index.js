import React from 'react';
import './header.scss';
import { BiSearchAlt } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { CgShoppingBag } from 'react-icons/cg';
import { FiUser } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { logoutUser } from '../../actions/userAction';

function Header() {
	const cartState = useSelector((state) => state.addToCartReducer);
	const userState = useSelector((state) => state.loginReducer);
	const { currentUser } = userState;
	const dispatch = useDispatch();

	return (
		<div id='header'>
			<div className='container'>
				<div className='header__container'>
					<div className='header__logo'>
						<Link to='/'>
							<h1>
								On<span>The</span>Way
							</h1>
						</Link>
					</div>

					<div className='header__search'>
						<BiSearchAlt className='header__icon' />
						<form>
							<input
								type='text'
								placeholder='Enter favourite your food .... '
								className='search-input'
							/>
						</form>
					</div>

					<div className='header__navigation'>
						<div className='navigation-location'>
							<GoLocation className='header__icon' />
						</div>

						<Link to='/cart'>
							<div className='navigation-cart'>
								<CgShoppingBag className='header__icon' />
								<span>{cartState.cartItems.length}</span>
							</div>
						</Link>

						{currentUser && currentUser.name ? (
							<div className='navigation-profile'>
								<DropdownButton title={currentUser.name}>
									{currentUser.isAdmid ? (
										<Dropdown.Item>
											<Link to='/admin'>
												Dashboard
											</Link>
										</Dropdown.Item>
									) : (
										<></>
									)}

									<Dropdown.Item>
										<Link to='/orders'>
											Your Orders
										</Link>
									</Dropdown.Item>

									<Dropdown.Item
										href='#'
										onClick={() =>
											dispatch(
												logoutUser()
											)
										}
									>
										Logout
									</Dropdown.Item>
								</DropdownButton>
							</div>
						) : (
							<Link to='/login'>
								<div className='navigation-profile'>
									<FiUser className='header__icon' />
								</div>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
