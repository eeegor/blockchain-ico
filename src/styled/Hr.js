import styled from 'styled-components';
import { theme } from './theme';

export const Hr = styled.hr`
	width: 100%;
	margin: ${props => props.margin || '26px auto 28px auto'};
	outline: 0;
	border: 0;
	border-top: 1px solid #3332;
	max-width: ${theme.container.maxWidth - 2 * 12}px;
`;
