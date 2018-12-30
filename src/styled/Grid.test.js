import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import {
	Grid,
	makeMobileColumns,
	makeTabletColumns,
	makeDesktopColumns
} from './Grid';

describe('Grid', () => {
	test('calculates default mobile columns', () => {
		const columns = makeMobileColumns(3);
		expect(columns).toEqual(1);
	});

	test('calculates responsive mobile columns', () => {
		const columns = makeMobileColumns([3, 5]);
		expect(columns).toEqual(3);
	});

	test('calculates default tablet columns', () => {
		const columns = makeTabletColumns(3);
		expect(columns).toEqual(3);
	});

	test('calculates responsive tablet columns', () => {
		const columns = makeTabletColumns([3, 5]);
		expect(columns).toEqual(5);
	});

	test('calculates default desktop columns', () => {
		const columns = makeDesktopColumns(3);
		expect(columns).toEqual(3);
	});

	test('calculates responsive desktop columns', () => {
		const columns = makeDesktopColumns([3, 5, 8]);
		expect(columns).toEqual(8);
	});

	test('renders default grid', () => {
		const tree = renderer.create(<Grid>Content</Grid>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('renders grid with given number of columns', () => {
		const tree = renderer.create(<Grid top={4}>Content</Grid>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('renders grid with given number of responsive columns [mobile, tablet, desktop]', () => {
		const tree = renderer
			.create(<Grid top={[2, 3, 4]}>Content</Grid>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
