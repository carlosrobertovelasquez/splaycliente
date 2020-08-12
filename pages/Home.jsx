import React from 'react';
import Session from '../components/Session';
const Home = () => {
	return (
		<div>
			<h1>Estamos desde L Home</h1>
		</div>
	);
};

const RootSession = Session(Home);
export default RootSession;
