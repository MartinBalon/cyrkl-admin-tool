import styled from 'styled-components';
import { color, font } from 'theme';

export const StyledFooter = styled.footer`
	text-align: center;
	position: absolute;
	width: 100%;
	bottom: 1rem;
	left: 0;
	right: 0;
	color: ${color.secondaryColorLight};
	font-size: ${font.small};
`;
