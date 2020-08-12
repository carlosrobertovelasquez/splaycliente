import React, { useState, useEffect, useMemo } from 'react';
import AuthContext from '../context/AuthContext';
import Layout from '../components/Layout';
import { getToken, setToken } from '../utils/token';

// Compomentes

import Auth from '../pages/Auth';
import Wall from '../pages/wall';

export default function index() {
	const [ auth, setauth ] = useState(undefined);
	useEffect(() => {
		const token = getToken();
		if (!token) {
			setauth(null);
		} else {
			setauth(token);
		}
	}, []);

	const logout = () => {
		console.log('cerrar sesion');
	};

	const setUser = (user) => {
		setauth(user);
	};

	const authData = useMemo(
		() => ({
			auth,
			logout,
			setUser
		}),
		[ auth ]
	);

	return (
		<AuthContext.Provider value={authData}>
			{!auth ? (
				<Layout>
					<Auth />
				</Layout>
			) : (
				<Wall />
			)}
		</AuthContext.Provider>
	);
}
