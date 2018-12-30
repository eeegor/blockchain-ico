import styled from 'styled-components';
import { theme } from './theme';
import { helperMargin } from './helperMargin';
import { helperPadding } from './helperPadding';

export const makeMobileColumns = columns => {
	if (columns && columns[0]) {
		return columns[0];
	}
	return 1;
};

export const makeTabletColumns = columns => {
	if (columns && columns[1]) {
		return columns[1];
	}
	if (columns) {
		return columns[columns.length - 1] || columns;
	}
	return 1;
};

export const makeDesktopColumns = columns => {
	if (columns && columns[2]) {
		return columns[2];
	}
	if (columns) {
		return columns[columns.length - 1] || columns;
	}
	return 1;
};

export const Grid = styled.div`
	display: grid;
	grid-gap: 15px 15px;
	grid-template-columns: repeat(
		${props => makeMobileColumns(props.columns)},
		1fr
	);

	${props =>
		props.gap &&
		`
		grid-gap: ${props.gap}px ${props.gap}px;
	`}

	@media (min-width: ${theme.media.tablet}px) {
		grid-gap: ${props => props.gap || theme.grid.gridGap}px
			${props => props.gap || theme.grid.gridGap}px;
		grid-template-columns: repeat(
			${props => makeTabletColumns(props.columns)},
			1fr
		);
	}

	@media (min-width: ${theme.media.desktop}px) {
		grid-template-columns: repeat(
			${props => makeDesktopColumns(props.columns)},
			1fr
		);
	}

	${props => helperMargin(props)}
	${props => helperPadding(props)}
`;
