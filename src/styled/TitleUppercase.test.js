import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { TitleUppercase } from '.';

describe('TitleUppercase', () => {
	test('renders default h1', () => {
		const tree = renderer
			.create(<TitleUppercase>Title</TitleUppercase>)
			.toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('text-transform', 'uppercase');
	});

	test('renders h1 with custom color', () => {
		const tree = renderer
			.create(<TitleUppercase color="green">Title</TitleUppercase>)
			.toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('color', 'green');
	});
});
