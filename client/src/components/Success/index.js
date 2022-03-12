import React from 'react';
import { Alert } from 'react-bootstrap';

function Success({ text }) {
	return (
		<div>
			<Alert variant={'success'}>{text}</Alert>
		</div>
	);
}

export default Success;
