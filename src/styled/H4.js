import styled from 'styled-components';
import { theme } from './theme';
import { helperMargin } from './helperMargin';

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
`;
