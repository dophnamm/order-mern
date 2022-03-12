import React from 'react';
import { Alert } from 'react-bootstrap';

function ErrorAlert({ text }) {
	return (
		<div>
			<Alert variant={'danger'}>{text}</Alert>
		</div>
	);
}

export default ErrorAlert;
