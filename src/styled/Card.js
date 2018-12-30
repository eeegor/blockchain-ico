import styled from 'styled-components';
import { theme } from './theme';
import { helperMargin } from './helperMargin';
import { helperPadding } from './helperPadding';

export const Card = styled.div`
	padding: 12px;
	width: 100%;
	overflow: hidden;
	overflow-x: scroll;
	margin-left: auto;
	margin-right: auto;
	height: 100%;
	border: 1px solid #fff2;
	border-radius: 4px;
	background: #fff;
	box-shadow: ${theme.shadows.medium};

	${props =>
		props.withIcon &&
		`
		display: grid;
		grid-template-columns: 52px auto;
  `}

	${props =>
		props.noBg &&
		`
		background: none !important;
		border: none !important;
		box-shadow: none !important;
  `}
  
  	${props => helperMargin(props)}
	${props => helperPadding(props)}
`;
