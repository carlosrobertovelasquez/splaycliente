import React, { useEffect } from 'react';
import Auth from '../hooks/useAuth';
import { useRouter } from 'next/router';

const muro = () => {
	const router = useRouter();
	const User = Auth();
	console.log(User);

	useEffect(() => {
		console.log('aqui vamos');
		if (typeof User === 'undefined') {
			router.push('/');
			console.log('hola');
		}
	}, []);

	return (
		<div>
			<h1>Aqui vamos de Nuevo</h1>
		</div>
	);
};

export default muro;
