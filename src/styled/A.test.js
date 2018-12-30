import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { A } from '.';

describe('A', () => {
	test('renders a tag', () => {
		const tree = renderer.create(<A color="red" />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('color', 'red !important');
	});
});
