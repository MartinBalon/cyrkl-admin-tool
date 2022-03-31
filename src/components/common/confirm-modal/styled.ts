import styled from 'styled-components';
import { appWrapper, borderRadius, color, font } from 'theme';

export const ConfirmModalWrapper = styled.div`
	background: rgba(255, 255, 255, 0.9);
	border: ${appWrapper.border};
	border-radius: ${borderRadius.secondaryRadius};
	width: ${appWrapper.width};
	height: ${appWrapper.height};
	overflow: ${appWrapper.overflow};
	position: fixed;
	z-index: 999;
	top: ${appWrapper.top};
	left: ${appWrapper.left};
	margin-top: ${appWrapper.marginTop};
	margin-left: ${appWrapper.marginLeft};
	padding: ${appWrapper.padding};
`;

export const Modal = styled.div`
	text-align: center;
	width: 20rem;
	height: 5rem;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -2.5rem;
	margin-left: -10rem;
	p {
		font-family: ${font.fontFamily};
		font-size: 1.4rem;
		font-weight: ${font.bold};
		color: ${color.secondaryColor};
		margin: 0;
		margin-bottom: 0.8rem;
	}
	button {
		border: none;
		border-radius: ${borderRadius.primaryRadius};
		font-family: ${font.fontFamily};
		font-size: ${font.large};
		color: ${color.primaryColor};
		font-weight: ${font.bold};
		padding: 0.5rem 2rem;
		width: 10rem;
		margin: 0 0.6rem;
		opacity: 0.8;
		&:hover {
			opacity: 1;
		}
	}
	button:nth-child(2) {
		background: ${color.errorColor};
	}
	button:nth-child(3) {
		background: ${color.successColor};
	}
`;
