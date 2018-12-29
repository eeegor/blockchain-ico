import styled from 'styled-components';
import { theme } from './theme';
import { helperMargin } from './helperMargin';

export const Paragraph = styled.p`
	font-size: 14px;
	line-height: 27px;
	font-family: ${theme.fonts.gtCinetype};
	margin-bottom: 12px;

	${props =>
		props.color &&
		`
	  color: ${props.color};
  `};

	${props => helperMargin(props)}
`;
