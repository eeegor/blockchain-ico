import styled from 'styled-components';
import { helperPadding } from './helperPadding';
import { helperMargin } from './helperMargin';

export const Chart = styled.div`
	padding: 0;
	margin-left: auto;
	margin-right: auto;
	height: 100%;
	width: 100%;
	position: relative;
	z-index: 7000;

	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	overflow-y: hidden;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	-webkit-transform: translate3d(0, 0, 0);

	.frame {
		flex: 0 0 auto;
	}

	${props =>
		props.maxWidth &&
		`
    max-width: ${props.maxWidth}px !important;
  `}

  ${props => helperMargin(props)}
  ${props => helperPadding(props)}
`;
