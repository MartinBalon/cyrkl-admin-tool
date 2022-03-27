import styled from 'styled-components';
import { color, font, borderRadius, boxShadow } from 'theme';

export const Wrapper = styled.div`
	background: ${color.primaryColor};
	color: ${color.secondaryColor};
	font-family: ${font.fontFamily};
	border: none;
	border-radius: ${borderRadius.secondaryRadius};
	width: 93.75rem;
	height: 51.25rem;
	overflow: hidden;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -25.625rem;
	margin-left: -46.875rem;
	padding: 2rem;
	box-shadow: ${boxShadow.primaryShadow};
`;
