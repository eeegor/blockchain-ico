import styled from 'styled-components';
import { helperMargin } from './helperMargin';
import { theme } from './theme';

export const H6 = styled.h6`
	font-size: 17px;
	line-height: 25px;
	font-family: ${theme.fonts.gtCinetypeLight};
	margin-bottom: 12px;

	${props =>
		props.color &&
		`
	color: ${props.color};
	`};

	${props => helperMargin(props)}
`;
