import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Text } from '.';

describe('Text', () => {
	test('renders default h1', () => {
		const tree = renderer.create(<Text>Title</Text>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('renders h1 with custom color', () => {
		const tree = renderer.create(<Text color="green">Title</Text>).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('color', 'green');
	});
});
