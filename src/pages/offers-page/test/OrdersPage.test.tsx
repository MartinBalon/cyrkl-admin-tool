import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import OffersPage from 'pages/offers-page';

describe('<OffersPage /> tests', () => {
	it('should render sort component', () => {
		render(<OffersPage />);
		expect(screen.queryByText(/Sort by:/i)).toBeInTheDocument();
		expect(screen.queryByText(/Price/i)).toBeInTheDocument();
		expect(screen.queryByText(/Date/i)).toBeInTheDocument();
	});

	it('should render display component', () => {
		render(<OffersPage />);
		expect(screen.queryByText(/Display:/i)).toBeInTheDocument();
		expect(screen.queryByText(/All/i)).toBeInTheDocument();
		expect(screen.queryByText(/Fraud/i)).toBeInTheDocument();
		expect(screen.queryByText(/Legit/i)).toBeInTheDocument();
	});

	it('should render fraud scan component', () => {
		render(<OffersPage />);
		expect(screen.queryByText(/Fraud Scan/i)).toBeInTheDocument();
	});
});
