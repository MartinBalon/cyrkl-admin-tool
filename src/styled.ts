import styled from 'styled-components';
import { color, font, borderRadius, boxShadow, appWrapper } from 'theme';

export const Wrapper = styled.div`
	background: ${color.primaryColor};
	color: ${color.secondaryColor};
	font-family: ${font.fontFamily};
	border: ${appWrapper.border};
	border-radius: ${borderRadius.secondaryRadius};
	width: ${appWrapper.width};
	height: ${appWrapper.height};
	overflow: ${appWrapper.overflow};
	position: ${appWrapper.position};
	z-index: 9;
	top: ${appWrapper.top};
	left: ${appWrapper.left};
	margin-top: ${appWrapper.marginTop};
	margin-left: ${appWrapper.marginLeft};
	padding: ${appWrapper.padding};
	box-shadow: ${boxShadow.primaryShadow};
`;
