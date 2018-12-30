import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Paragraph } from '.';

describe('Paragraph', () => {
	test('renders default h1', () => {
		const tree = renderer.create(<Paragraph>Title</Paragraph>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('renders h1 with custom color', () => {
		const tree = renderer
			.create(<Paragraph color="green">Title</Paragraph>)
			.toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('color', 'green');
	});
});
