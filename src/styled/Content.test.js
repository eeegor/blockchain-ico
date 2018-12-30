import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Content } from '.';

describe('Content', () => {
	test('renders content', () => {
		const tree = renderer.create(<Content>Content</Content>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('renders content with top offset', () => {
		const tree = renderer
			.create(<Content top={100}>Content</Content>)
			.toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('margin-top', '100px');
	});

	test('renders content with top offset', () => {
		const tree = renderer
			.create(<Content top={[100, 200]}>Content</Content>)
			.toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule('margin-top', '100px');
	});
});
