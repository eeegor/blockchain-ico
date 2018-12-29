import styled from 'styled-components';
import { theme } from './theme';
import { helperMargin } from './helperMargin';

export const TitleUppercase = styled.h2`
	font-size: 16px;
	line-height: 20px;
	font-family: ${theme.fonts.gtCinetypeBold};
	margin-bottom: 12px;
	color: #101530;
	text-transform: uppercase;
	letter-spacing: 1px;

	${props =>
		props.color &&
		`
	  color: ${props.color};
  `};

	${props => helperMargin(props)}
`;