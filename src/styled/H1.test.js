import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { H1 } from '.';

describe('H1', () => {
	test('renders default h1', () => {
		const tree = renderer.create(<H1>Title</H1>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('renders h1 with custom color', () => {
		const tree = renderer.create(<H1 color="green">Title</H1>).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('color', 'green');
	});
});
