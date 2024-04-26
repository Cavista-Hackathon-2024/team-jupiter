import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children, actionBtn }) => {
	return (
		<>
			<header>
				<div className='fx_between'>
					<Link to='/'>
						<h1 className='font-normal'>Eternal</h1>
					</Link>

					{actionBtn}
				</div>
			</header>

			<main className='container mx-auto p-6'>{children}</main>
		</>
	);
};

export default Layout;
