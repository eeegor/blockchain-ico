import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { H6 } from '.';

describe('H6', () => {
	test('renders default h1', () => {
		const tree = renderer.create(<H6>Title</H6>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('renders h1 with custom color', () => {
		const tree = renderer.create(<H6 color="green">Title</H6>).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('color', 'green');
	});
});
