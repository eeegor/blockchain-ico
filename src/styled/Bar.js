import styled from 'styled-components';
import { helperMargin } from './helperMargin';
import { helperPadding } from './helperPadding';
import { theme } from './theme';

export const Bar = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	${props =>
		props.center &&
		`
		align-items: center;
		justify-content: center;
	`}

	${props =>
		props.centerX &&
		`
		justify-content: center;
	`}
	
	${props =>
		props.justifyBetween &&
		`
		justify-content: space-between;
	`}
	
	${props =>
		props.centerY &&
		`
		align-items: center;
	`}

	${props => helperMargin(props)}
	${props => helperPadding(props)}
`;

export const BarInfo = styled(Bar)`
	@media (max-width: ${theme.media.tablet - 1}px) {
		width: 100%;
		justify-content: space-between;
	}
`;

export const BarControls = styled(Bar)`
	@media (max-width: ${theme.media.tablet - 1}px) {
		width: 100%;
		justify-content: space-between;
		margin-bottom: 12px;
	}
`;
