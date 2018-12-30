import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { H4 } from '.';

describe('H4', () => {
	test('renders default h1', () => {
		const tree = renderer.create(<H4>Title</H4>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('renders h1 with custom color', () => {
		const tree = renderer.create(<H4 color="green">Title</H4>).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('color', 'green');
	});
});
