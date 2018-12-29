import styled from 'styled-components';
import { theme } from './theme';

export const Content = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: no-wrap;
	flex-direction: column;
	overflow: scroll;
	overflowscrolling: touch;
	webkitoverflowscrolling: touch;
	-webkit-overflow-scrolling: touch;
	margin-top: ${props => props.top[0]}px;
	overflow: hidden;
	background: ${theme.colors.websiteBg};
	padding: 4rem 0;
	-webkit-overflow-scrolling: touch;
	z-index: 5000;

	@media (min-width: ${theme.media.tablet}px) {
		margin-top: ${props => props.top[1]}px;
	}
`;
