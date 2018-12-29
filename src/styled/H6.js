import styled from 'styled-components';
import { theme } from './theme';
import { helperMargin } from './helperMargin';

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
