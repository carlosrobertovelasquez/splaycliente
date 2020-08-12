import React from 'react';
import useAuth from '../hooks/useAuth';

export default function wall() {
	const User = useAuth();

	console.log(User);
	return (
		<div>
			<h1>Bienvendio al Muro</h1>
		</div>
	);
}
