import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { TextSmall } from '.';

describe('TextSmall', () => {
	test('renders default h1', () => {
		const tree = renderer.create(<TextSmall>Title</TextSmall>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('renders h1 with custom color', () => {
		const tree = renderer
			.create(<TextSmall color="green">Title</TextSmall>)
			.toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('color', 'green');
	});
});
