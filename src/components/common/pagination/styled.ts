import styled from 'styled-components';
import { color, font } from 'theme';

export const PaginationList = styled.ul`
	list-style: none;
	display: flex;
	margin: 0;
	margin-top: 1.6rem;
	padding: 0;
	align-items: center;
	justify-content: center;
`;

export const PaginationListItem = styled.li<{ active: boolean }>`
	width: 1.4rem;
	height: 1.4rem;
	text-align: center;
	font-size: ${font.small};
	font-weight: ${font.bold};
	color: ${props =>
		props.active ? color.secondaryColor : color.secondaryColorLight};
	margin: 0 0.1rem;
	padding: 0;
	cursor: ${props => (props.active ? 'default' : 'pointer')};
`;
