import React from 'react';
import Head from 'next/head';
import Navbar from '../components/organims/Navbar';
import Footer from '../components/organims/Footer';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
	const router = useRouter();
	return (
		<React.Fragment>
			<Head>
				<title>Splay</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			{router.pathname === '/' ? (
				<div>
					{children}
					<Navbar />
					<Footer />
				</div>
			) : (
				<div>
					<main>{children}</main>
				</div>
			)}
		</React.Fragment>
	);
};

export default Layout;
