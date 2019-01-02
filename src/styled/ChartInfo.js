import styled from 'styled-components';
import { theme } from './theme';
import { TextSmall } from './TextSmall';

export const ChartInfo = styled.div`
	position: absolute;
	top: 12px;
	left: 0;
	display: flex;
	padding: 12px 0;
	width: 100%;
	justify-content: center;

	@media (min-width: ${theme.media.tablet}px) {
		padding: 24px 0 12px 0;
	}

	${TextSmall} {
		margin-bottom: 0;
		color: #fff;
		font-size: 75%;
		opacity: 0.5;
	}
`;
