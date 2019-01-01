import styled from 'styled-components';
import { helperMargin } from './helperMargin';
import { helperPadding } from './helperPadding';

export const Div = styled.div`
	width: 100%;

	${props =>
		props.color &&
		`
	  color: ${props.color} !important;
  `};

	${props =>
		props.background &&
		`
	  background: ${props.background} !important;
  `};

	${props =>
		props.minHeight &&
		`
	  min-height: ${props.minHeight}px !important;
  `};

	${props =>
		props.zIndex &&
		`
	  z-index: ${props.zIndex} !important;
  `};

	${props => helperMargin(props)}
	${props => helperPadding(props)}
`;
