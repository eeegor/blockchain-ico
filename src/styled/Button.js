import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { theme } from './theme';
import { helperMargin } from './helperMargin';
import { helperPadding } from './helperPadding';

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid ${lighten(0.35, theme.colors.buttonPrimaryBg)};
  outline: 0;
  background: #fff;
  color: ${theme.colors.buttonPrimary};
  padding: 12px 36px;
  border-radius: ${theme.borderRadius}px;
  font-size: 13px;
  letter-spacing: 1.18px;
  line-height: 16px;
  text-transform: uppercase;
  margin: ${props => props.margin || 0};
  font-family: ${theme.fonts.gtCinetypeBold};
  box-shadow: ${theme.shadows.button};
  transition: all 0.15s ease-out;

  :hover {
    color: #fff;
    background: ${darken(0.1, theme.colors.buttonPrimary)};
    border-color: ${darken(0.1, theme.colors.buttonPrimary)};
  }

  ${props =>
		props.noShadow &&
		`
		box-shadow: none !important;
  `}
  
  ${props =>
		props.selected &&
		`
		color: #fff;
		background: ${theme.colors.buttonPrimary};
		border: 1px solid ${theme.colors.buttonPrimary};
	`}
  
  ${props =>
		props.outline &&
		`
		color: ${theme.colors.buttonPrimary};
		background: none;
		border: 1px solid ${theme.colors.buttonPrimary};
	`}
  
  ${props =>
		props.primary &&
		`
		color: #fff;
		background: ${theme.colors.buttonPrimary};
		border: 1px solid ${theme.colors.buttonPrimary};
	`}
  
  ${props =>
		props.success &&
		`
		color: #fff;
		background: ${theme.colors.primaryGreen};
    border: 1px solid ${theme.colors.primaryGreen};
    
    :hover {
      color: #fff;
      background: ${darken(0.1, theme.colors.primaryGreen)};
      border-color: ${darken(0.1, theme.colors.primaryGreen)};
    }
	`}
  
  ${props =>
		props.danger &&
		`
		color: #fff;
		background: ${theme.colors.primaryRed};
		border: 1px solid ${theme.colors.primaryRed};
    
    :hover {
      color: #fff;
      background: ${darken(0.1, theme.colors.primaryRed)};
      border-color: ${darken(0.1, theme.colors.primaryRed)};
    }
  `}
  
  ${props =>
		props.token &&
		`
		color: #fff;
    border: 1px solid #6947FF;
    background: #6947FF;
    background: linear-gradient(45deg, #6947FF 0%, #602BFF 100%);
    position: relative;
    z-index: 2;

    :before {
      display: flex;
      content: '';
      background: #000;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      opacity: 0;
      transition: all 0.15s ease-out;
      z-index: -1;
    }
    
    :hover {
      color: #fff;
      border: 1px solid #6947FF;
      background: #6947FF;
      background: linear-gradient(45deg, #6947FF 0%, #602BFF 100%);

      :before {
        opacity: 0.2;
      }
    }
	`}
  
  ${props => helperMargin(props)}
  ${props => helperPadding(props)}
`;
