import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Bar } from '.';

describe('Bar', () => {
	it('renders horizontal bar', () => {
		const tree = renderer.create(<Bar />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('display', 'flex');
	});

	it('renders horizontal bar with centered content', () => {
		const tree = renderer.create(<Bar center />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('align-items', 'center');
		expect(tree).toHaveStyleRule('justify-content', 'center');
	});

	it('renders horizontal bar with horizontally centered content', () => {
		const tree = renderer.create(<Bar centerX />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('justify-content', 'center');
	});

	it('renders horizontal bar with horizontally distibuted content', () => {
		const tree = renderer.create(<Bar justifyBetween />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('justify-content', 'space-between');
	});

	it('renders horizontal bar with vertically centered content', () => {
		const tree = renderer.create(<Bar centerY />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('align-items', 'center');
	});
});
