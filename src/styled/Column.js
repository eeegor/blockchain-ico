import styled from 'styled-components';
import { helperMargin } from './helperMargin';
import { helperPadding } from './helperPadding';

export const Column = styled.div`  
	  ${props =>
			props.maxWidth &&
			`
	  	max-width: ${props.maxWidth}px !important;
	  `}
  	${props => helperMargin(props)}
	${props => helperPadding(props)}
`;
