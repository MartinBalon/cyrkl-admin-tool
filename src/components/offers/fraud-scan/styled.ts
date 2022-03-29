import styled from 'styled-components';
import { color } from 'theme';

export const FraudScanWrapper = styled.div`
	display: flex;
	margin-left: auto;
`;

export const SwitchWrapper = styled.div<{ active: boolean }>`
	height: 1.4rem;
	width: 2.4rem;
	display: inline-block;
	background: ${props =>
		props.active ? color.successColor : color.errorColor};
	border-radius: 80px;
	position: relative;
	margin-left: 0.6rem;
	transition: background ease 0.3s;
	cursor: pointer;
`;

export const SwitchCircle = styled.div<{ active: boolean }>`
	height: 1rem;
	width: 1rem;
	background: ${color.secondaryColor};
	position: absolute;
	border-radius: 50%;
	top: 0.2rem;
	transform: translateX(0.2rem);
	${props =>
		props.active
			? 'transform: translateX(1.2rem)'
			: 'transform: translateX(0.2rem)'};
	transition: transform ease 0.3s;
`;
