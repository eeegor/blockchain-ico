import styled from 'styled-components';
import { helperMargin } from './helperMargin';
import { helperPadding } from './helperPadding';
import { theme } from './theme';

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
	${props => helperPadding(props)}
`;
