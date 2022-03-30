import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Offer from 'components/offers/offer';
import { mockOffer } from 'mock-data/mockOffer';
import { Provider } from 'react-redux';
import store from 'store';

describe('<Offer Componet /> tests', () => {
	it('should render offer component properly', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Offer product={mockOffer} />
				</BrowserRouter>
			</Provider>
		);
		expect(screen.queryByText(/Product/i)).toBeInTheDocument();
		expect(screen.queryByText(/Description/i)).toBeInTheDocument();
		expect(screen.queryByText(/Price/i)).toBeInTheDocument();
		expect(screen.queryByText(/Added/i)).toBeInTheDocument();
		expect(screen.queryByText(/Country/i)).toBeInTheDocument();
		expect(screen.queryByText(/Status/i)).toBeInTheDocument();
		expect(screen.queryByText(/Actions/i)).toBeInTheDocument();
	});
});
