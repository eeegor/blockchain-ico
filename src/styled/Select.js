import styled from 'styled-components';
import { lighten } from 'polished';
import { helperMargin } from './helperMargin';
import { helperPadding } from './helperPadding';
import { theme } from './theme';

export const Select = styled.div`
	position: relative;

	&::after {
		position: absolute;
		content: '';
		display: flex;
		justify-content: center;
		align-items: center;
		top: 50%;
		right: 1rem;
		transform: translateY(-30%);
		border: 6px solid transparent;
		border-color: ${lighten(
			0.35,
			theme.colors.buttonPrimaryBg
		)} transparent transparent transparent;
	}
  
	select {
		width: 100%;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border: none;
		border-radius: ${theme.borderRadius}px;
		font-size: 13px;
		line-height: 24px;
		padding: 12px 36px 12px 12px;
		border: 1px solid ${lighten(0.35, theme.colors.buttonPrimaryBg)};
		background: #fff;
		position: relative;
		color: ${theme.colors.buttonPrimary};
		font-family: ${theme.fonts.gtCinetypeBold};
	  
		&::-ms-expand {
		  display: none;
		}
	  }

  ${props => helperMargin(props)}
  ${props => helperPadding(props)}
`;
