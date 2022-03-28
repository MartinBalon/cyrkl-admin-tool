import { ProductType } from 'types/products';

export const scanForFraudulentOffers = (array: ProductType[]) => {
	const filteredArray = [...array];
	const phoneNumberRegex =
		/(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{3,6})(\s[0-9]{3,6})?/; //eslint-disable-line
	const emailRegex = /\w+@\w+\.\w{2,10}/; //eslint-disable-line

	filteredArray.forEach(offer => {
		offer.hidden = false;
		offer.fraudulent = false;
		offer.reason = '';
		if (phoneNumberRegex.test(offer.perex0) || emailRegex.test(offer.perex0)) {
			offer.fraudulent = true;
			offer.reason = 'Customer included their contact details in description.';
		}
	});

	return filteredArray;
};
