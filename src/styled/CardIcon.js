import styled from 'styled-components';
import { theme } from './theme';
import { helperMargin } from './helperMargin';
import { helperPadding } from './helperPadding';

export const CardIcon = styled.div`
	max-width: 100%;
	height: 40px;
	width: 40px;
	background: ${theme.colors.primaryLightBlue}15;
	border-radius: 20px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	color: #fff;

	${props => helperMargin(props)}
	${props => helperPadding(props)}
`;
