import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Offer from 'components/offers/offer';

describe('<Offer Componet /> tests', () => {
	it('should render offer component properly', () => {
		render(<Offer />);
		expect(screen.queryByText(/Product/i)).toBeInTheDocument();
		expect(screen.queryByText(/Description/i)).toBeInTheDocument();
		expect(screen.queryByText(/Price/i)).toBeInTheDocument();
		expect(screen.queryByText(/Added/i)).toBeInTheDocument();
		expect(screen.queryByText(/Country/i)).toBeInTheDocument();
		expect(screen.queryByText(/Status/i)).toBeInTheDocument();
		expect(screen.queryByText(/Actions/i)).toBeInTheDocument();
	});
});
