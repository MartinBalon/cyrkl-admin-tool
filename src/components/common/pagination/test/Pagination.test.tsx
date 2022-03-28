import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Pagination from 'components/common/pagination';

describe('<Pagination /> tests', () => {
	it('should render correctly', () => {
		render(
			<Pagination
				totalPages={3}
				currentPage={1}
				onChangePage={() => {
					return null;
				}}
			/>
		);
		expect(screen.queryByText(/1/i)).toBeInTheDocument();
		expect(screen.queryByText(/3/i)).toBeInTheDocument();
	});
});
