import styled from 'styled-components';
import { theme } from './theme';
import { helperMargin } from './helperMargin';
import { helperPadding } from './helperPadding';

export const H1 = styled.h1`
	font-size: 34px;
	line-height: 51px;
	font-family: ${theme.fonts.rubik};
	margin-bottom: 12px;
	${props =>
		props.color &&
		`
	color: ${props.color};

	`};

	${props => helperMargin(props)}
	${props => helperPadding(props)}
`;
