import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from 'components/footer';
import OffersPage from 'pages/offers-page';
import OfferDetail from 'pages/offer-detail-page';
import { Wrapper } from 'styled';
import NotFoundPage from 'pages/not-found-page';

const App = () => {
	return (
		<Wrapper>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Navigate to='/offers' replace />} />
					<Route path='/offers' element={<OffersPage />} />
					<Route path='/offers/offer/:itemId' element={<OfferDetail />} />
					<Route path='/*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</Wrapper>
	);
};

export default App;
