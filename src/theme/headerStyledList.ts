import styled from 'styled-components';
import { color } from 'theme';

export const HeaderList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	margin-right: 3.6rem;
`;

export const HeaderListItemTitle = styled.li`
	display: inline;
	color: color.secondaryColor;
`;

export const HeaderListItem = styled.li<{
	active: boolean;
	fraudScanActive?: boolean;
}>`
	display: inline;
	margin: 0 0.6rem;
	cursor: ${props => (props.fraudScanActive ? 'pointer' : null)};
	color: ${props =>
		props.active ? color.secondaryColor : color.secondaryColorLight};
`;
