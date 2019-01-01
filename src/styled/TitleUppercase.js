import styled from 'styled-components';
import { helperMargin } from './helperMargin';
import { helperPadding } from './helperPadding';
import { theme } from './theme';

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
	  color: ${props.color} !important;
  `};

	${props => helperMargin(props)}
	${props => helperPadding(props)}
`;
