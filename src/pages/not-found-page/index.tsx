import React from 'react';
import { Link } from 'react-router-dom';
import { color } from 'theme';
import { PageNotFound, PageNotFoundWrapper } from './styled';

const NotFoundPage = () => {
	return (
		<PageNotFoundWrapper>
			<PageNotFound>
				404 ERROR - PAGE NOT FOUND
				<Link
					to='/'
					style={{
						textDecoration: 'underline',
						color: color.secondaryColorLight,
						display: 'block',
						fontSize: '1.4rem',
					}}
				>
					Take Me Home
				</Link>
			</PageNotFound>
		</PageNotFoundWrapper>
	);
};

export default NotFoundPage;
