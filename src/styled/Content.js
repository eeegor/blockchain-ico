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
	margin-top: 0;
	overflow: hidden;
	background: ${theme.colors.websiteBg};
	padding: 4rem 0;
	-webkit-overflow-scrolling: touch;
	z-index: 5000;

	${props =>
		props.top !== undefined &&
		`
		margin-top: ${parseInt(props.top[0], 10) || props.top}px;
		${parseInt(props.top[1], 10) !== undefined &&
			`			
			@media (min-width: ${theme.media.tablet}px) {
				margin-top: ${props.top[1]}px;
			}
		`}

	`}
`;
