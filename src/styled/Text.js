import styled from 'styled-components';
import { theme } from './theme';
import { helperMargin } from './helperMargin';

export const Text = styled.p`
	font-size: 16px;
	line-height: 26px;
	font-family: ${theme.fonts.gtCinetype};
	margin-bottom: 12px;

	${props =>
		props.color &&
		`
	  color: ${props.color};
  `};

	${props => helperMargin(props)}
`;
