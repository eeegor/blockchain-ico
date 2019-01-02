import styled from 'styled-components';
import { helperMargin } from './helperMargin';
import { helperPadding } from './helperPadding';

export const Error = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	${props => helperMargin(props)}
	${props => helperPadding(props)}
`;
