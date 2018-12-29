import styled from 'styled-components';
import { theme } from './theme';
import { helperMargin } from './helperMargin';

export const H5 = styled.h5`
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
