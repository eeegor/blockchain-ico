import styled from 'styled-components';
import { helperMargin } from './helperMargin';
import { helperPadding } from './helperPadding';
import { theme } from './theme';

export const H4 = styled.h4`
	font-size: 18px;
	line-height: 33px;
	font-family: ${theme.fonts.gtCinetypeLight};
	margin-bottom: 12px;

	${props =>
		props.color &&
		`
	color: ${props.color};
	`};

	${props => helperMargin(props)}
	${props => helperPadding(props)}
`;
