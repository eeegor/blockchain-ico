import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { H2 } from '.';

describe('H2', () => {
	test('renders default h1', () => {
		const tree = renderer.create(<H2>Title</H2>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('renders h1 with custom color', () => {
		const tree = renderer.create(<H2 color="green">Title</H2>).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('color', 'green');
	});
});
