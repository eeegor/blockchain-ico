import styled from 'styled-components';
import { darken } from 'polished';
import { theme } from './theme';
import { helperMargin } from './helperMargin';

export const A = styled.a`
	font-size: 16px;
	letter-spacing: 0.5px;
	line-height: 26px;
	font-family: ${theme.fonts.gtCinetype};
	color: ${theme.colors.buttonPrimary};
	text-decoration: none;
	transition: all 0.15s ease-out;

	:hover {
		color: ${darken(0.2, theme.colors.buttonPrimary)};
	}

	${props =>
		props.color &&
		`
	  color: ${props.color} !important;
  `};

	${props => helperMargin(props)}
`;
