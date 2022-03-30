import styled from 'styled-components';
import { font } from 'theme';

export const ProductWrapper = styled.div`
	width: 90%;
	margin: 0 auto;
	display: flex;
`;

export const ProductHeading = styled.h1`
	text-align: center;
`;

export const ProductDescription = styled.div`
	margin-left: 4rem;
	width: 100%;
	p {
		display: inline-block;
		width: 7rem;
		margin: 0;
		margin-bottom: 0.4rem;
		padding: 0;
		font-size: ${font.large};
		font-weight: ${font.bold};
	}
	span {
	}
`;

export const LoaderWrapper = styled.div`
	width: 100%;
	height: 100%;
`;
