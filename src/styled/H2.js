import styled from 'styled-components';
import { theme } from './theme';
import { helperMargin } from './helperMargin';

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
