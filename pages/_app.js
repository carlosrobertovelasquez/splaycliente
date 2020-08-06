import React, { useState, useEffect, useMemo } from 'react';
import { ApolloProvider } from '@apollo/client';
import '../styles/globals.css';
import client from '../config/apollo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../context/AuthContext';

import { getToken, decodeToken } from '../utils/token';

import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
	const [ auth, setAuth ] = useState(undefined);

	useEffect(() => {
		const token = getToken();
		if (!token) {
			setAuth(null);
		} else {
			setAuth(decodeToken(token));
		}
	}, []);
	const logout = () => {
		console.log('cerrar session');
	};

	const setUser = (user) => {
		setAuth(user);
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
		<React.Fragment>
			<ApolloProvider client={client}>
				<AuthContext.Provider value={auth}>
					<ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar
						newestOnTop
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
					<Component {...pageProps} />
				</AuthContext.Provider>
			</ApolloProvider>
		</React.Fragment>
	);
}

export default MyApp;
