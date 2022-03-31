import styled from 'styled-components';
import { font, borderRadius, boxShadow, color } from 'theme';

export const List = styled.ul`
	list-style: none;
	height: 4rem;
	border-radius: ${borderRadius.primaryRadius};
	box-shadow: ${boxShadow.primaryShadow};
	margin: 1rem 0;
	padding: 0.6rem;
	position: relative;
`;

export const ListItem = styled.li<{ width: string }>`
	display: inline-block;
	height: 100%;
	padding-right: 0.6rem;
	width: ${props => props.width};
	font-size: ${font.medium};
`;

export const ListItemTitle = styled.p`
	margin: 0;
	color: ${color.secondaryColor};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const ListItemDescription = styled.p`
	margin: 0;
	color: ${color.secondaryColorLight};
	font-size: ${font.small};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const ListItemActions = styled.div`
	margin: 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	img {
		max-width: 25px;
		height: 21px;
		margin-right: 6px;
		cursor: pointer;
	}
`;

export const StatusIndicator = styled.div<{ color: string }>`
	background: ${props => props.color};
	height: 100%;
	width: 40px;
	position: absolute;
	top: 0;
	right: 0;
	border-radius: 0 5px 5px 0;
	padding: 1rem 0.6rem;
`;
