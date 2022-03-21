import React from 'react';
import './style.scss';
import { Row, Col } from 'react-bootstrap';
import { IoCallOutline } from 'react-icons/io5';
import { FiMail } from 'react-icons/fi';
import { BsYoutube, BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs';

function Footer() {
	return (
		<div className='footer'>
			<div className='container'>
				<div className='footer__container'>
					<Row>
						<Col>
							<div className='logo'>
								<h1>
									On<span>The</span>Way
								</h1>
							</div>

							<p>
								<IoCallOutline /> +998 88 887-00-00
							</p>
							<p>
								<FiMail /> info@onetheway.com
							</p>
						</Col>
						<Col>
							<ul>
								<li>Payment</li>
								<li>Offer</li>
								<li>Jobs</li>
							</ul>
						</Col>
						<Col>
							<ul>
								<li>For partners</li>
								<li>Communication</li>
								<li>User agreement</li>
							</ul>
						</Col>
						<Col>
							<ul>
								<li>To be a courier</li>
								<li>Connect</li>
								<li>Delivery</li>
							</ul>
						</Col>

						<ul className='list-social'>
							<li>
								<BsFacebook />
							</li>
							<li>
								<BsInstagram />
							</li>
							<li>
								<BsYoutube />
							</li>
							<li>
								<BsTelegram />
							</li>
						</ul>
					</Row>
				</div>
			</div>
		</div>
	);
}

export default Footer;
