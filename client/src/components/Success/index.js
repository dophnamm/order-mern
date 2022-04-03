import React from 'react';
import { Alert } from 'react-bootstrap';

function SuccessAlert({ text }) {
	return (
		<div>
			<Alert variant={'success'}>{text}</Alert>
		</div>
	);
}

export default SuccessAlert;
