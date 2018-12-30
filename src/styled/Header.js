import styled from 'styled-components';
import { helperMargin } from './helperMargin';
import { helperPadding } from './helperPadding';
import { theme } from './theme';

export const Header = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: ${theme.headerHeight.mobile}px;
	display: flex;
	align-items: center;
	padding: 0 12px;
	background: #fff;
	box-shadow: ${theme.shadows.small};
	z-index: 8000;

	@media (min-width: ${theme.media.tablet}px) {
		height: ${theme.headerHeight.tablet}px;

		.logo {
			width: 160px;
			height: 48px;
		}
	}

	${props => helperMargin(props)}
	${props => helperPadding(props)}
`;
