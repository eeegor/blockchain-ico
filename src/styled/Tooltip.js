import styled from 'styled-components';
import { theme } from './theme';
import { Column } from './Column';
import { TitleUppercase } from './TitleUppercase';
import { TextSmall } from './TextSmall';

export const Tooltip = styled.div`
	position: fixed;
	top: 12px;
	left: 12px;
	right: 12px;
	color: #fff;
	z-index: 12000;
	background: ${theme.colors.darkBg};

	display: grid;
	grid-template-columns: 50px auto 100px;
	grid-gap: 0;

	@media (min-width: ${theme.media.tablet}px) {
		padding: 12px;
		grid-template-columns: 60px 180px 140px auto 120px;
	}

	${Column} {
		margin-right: 12px;
		margin-bottom: 6px;
	}

	${TitleUppercase} {
		margin-bottom: 0;
		margin-right: 6px;
		color: #fff;
		font-size: 75%;
		opacity: 0.8;
	}

	${TextSmall} {
		margin-bottom: 0;
		color: #fff;
		font-size: 75%;
		opacity: 0.5;
	}
`;
