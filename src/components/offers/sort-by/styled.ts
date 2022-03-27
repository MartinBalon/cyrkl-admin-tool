import styled from 'styled-components';
import { color, font } from 'theme';

export const SortByList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	font-size: ${font.large};
	font-weight: ${font.bold};
	margin-right: 4rem;
`;

export const SortByListItemTitle = styled.li`
	display: inline;
	color: color.secondaryColor;
`;

export const SortByListItem = styled.li<{ active?: boolean }>`
	display: inline;
	margin: 0 0.6rem;
	cursor: pointer;
	color: ${props =>
		props.active ? color.secondaryColor : color.secondaryColorLight};
`;
