import styled from 'styled-components';
import { theme } from './theme';
import { helperMargin } from './helperMargin';
import { helperPadding } from './helperPadding';

export const Container = styled.div`
  padding: 0 12px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  width: 100%;
  max-width: ${theme.container.maxWidth}px;
  display: flex;
  flex-direction: column;

  ${props =>
		props.center &&
		`
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `}

  ${props =>
		props.full &&
		`
    max-width: 100% !important;
  `}
  
  ${props =>
		props.maxWidth &&
		`
    max-width: ${props.maxWidth}px !important;
  `}

	${props => helperMargin(props)}
	${props => helperPadding(props)}
`;
