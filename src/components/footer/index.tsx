import React from 'react';
import { StyledFooter } from './styled';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return <StyledFooter>&copy; Cyrkl Admin - {currentYear}</StyledFooter>;
};

export default Footer;
