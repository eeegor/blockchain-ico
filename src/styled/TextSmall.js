import styled from 'styled-components';
import { helperMargin } from './helperMargin';
import { helperPadding } from './helperPadding';
import { theme } from './theme';

export const TextSmall = styled.p`
	font-size: 15px;
	line-height: 22px;
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
