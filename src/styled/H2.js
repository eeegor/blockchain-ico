import styled from 'styled-components';
import { helperMargin } from './helperMargin';
import { theme } from './theme';

export const H2 = styled.h2`
	font-size: 24px;
	line-height: 33px;
	font-family: ${theme.fonts.rubik};
	margin-bottom: 12px;

	${props =>
		props.color &&
		`
	  color: ${props.color};
  `};

	${props => helperMargin(props)}
`;
