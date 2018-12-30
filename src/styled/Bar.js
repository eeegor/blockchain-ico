import styled from 'styled-components';
import { helperMargin } from './helperMargin';
import { helperPadding } from './helperPadding';

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
