import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container/Container';

const Layout = ({ children, actionBtn }) => {
	return (
		<>
			<header>
				<Container>
					<div className='fx_between'>
						<Link to='/'>
							<h1 className='font-normal'>Eternal</h1>
						</Link>

						{actionBtn}
					</div>
				</Container>
			</header>

			<main>
				<Container>{children}</Container>
			</main>
		</>
	);
};

export default Layout;
