import styled, { keyframes } from 'styled-components';
import { color } from 'theme';

export const LoaderWrapper = styled.div`
	height: 50vh;
	position: relative;
`;

const Animation = keyframes`  
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const StyledLoader = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
	left: 50%;
	margin-left: -40px;
	top: 50%;
	margin-top: -40px;
	div {
		transform-origin: 40px 40px;
		animation: ${Animation} 0.8s linear infinite;
	}
	div:after {
		content: ' ';
		display: block;
		position: absolute;
		top: 3px;
		left: 37px;
		width: 3px;
		height: 16px;
		border-radius: 5px;
		background-color: ${color.secondaryColorLight};
	}
	div:nth-child(1) {
		transform: rotate(0deg);
		animation-delay: -0.7s;
	}

	div:nth-child(2) {
		transform: rotate(45deg);
		animation-delay: -0.6s;
	}

	div:nth-child(3) {
		transform: rotate(90deg);
		animation-delay: -0.5s;
	}

	div:nth-child(4) {
		transform: rotate(135deg);
		animation-delay: -0.4s;
	}

	div:nth-child(5) {
		transform: rotate(180deg);
		animation-delay: -0.3s;
	}

	div:nth-child(6) {
		transform: rotate(225deg);
		animation-delay: -0.2s;
	}

	div:nth-child(7) {
		transform: rotate(270deg);
		animation-delay: -0.1s;
	}

	div:nth-child(8) {
		transform: rotate(315deg);
		animation-delay: 0s;
	}
`;
