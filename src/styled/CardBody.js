import styled from 'styled-components';
import { helperMargin } from './helperMargin';
import { helperPadding } from './helperPadding';

export const CardBody = styled.div`
	${props => helperMargin(props)}
	${props => helperPadding(props)}
`;
