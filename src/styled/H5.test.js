import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { H5 } from '.';

describe('H5', () => {
	test('renders default h1', () => {
		const tree = renderer.create(<H5>Title</H5>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('renders h1 with custom color', () => {
		const tree = renderer.create(<H5 color="green">Title</H5>).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('color', 'green');
	});
});
